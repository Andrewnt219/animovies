import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Landing from 'Pages/Landing';
import { ThemeProvider } from 'styled-components';
import movieTheme from 'Theme/movieTheme';
import animeTheme from 'Theme/animeTheme';
import Anime from 'Pages/Anime';
import MoviePage from 'Pages/MoviePage';
import GlobalStyle from 'Theme/global';

function App(props) {
  return (
    <ThemeProvider
      theme={
        props.location.pathname.includes('movie') ? movieTheme : animeTheme
      }
    >
      <GlobalStyle />

      <Switch>
        <Route path="/movie" exact component={Landing} />
        <Route path="/anime" exact component={Landing} />
        <Route path="/anime/all" exact component={Anime} />
        <Route path="/movie/all" exact component={MoviePage} />
        <Redirect from="/" to="/movie" exact />
        <Redirect to="/404" exact />
      </Switch>
    </ThemeProvider>
  );
}

export default withRouter(App);
