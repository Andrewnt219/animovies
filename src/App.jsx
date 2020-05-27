import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Landing from 'Pages/Landing';
import { ThemeProvider } from 'styled-components';
import movieTheme from 'Theme/movieTheme';
import animeTheme from 'Theme/animeTheme';
import Anime from 'Pages/Anime';
import MoviePage from 'Pages/MoviePage';
import GlobalStyle from 'Theme/global';
import ItemDetail from 'Pages/ItemDetail';

function App(props) {
  const { pathname } = useLocation();
  return (
    <ThemeProvider theme={pathname.includes('movie') ? movieTheme : animeTheme}>
      <GlobalStyle />
      <Switch>
        <Route path="/anime/all" component={Anime} />
        <Route path="/movie/all" component={MoviePage} />
        <Route path="/movie" component={Landing} />
        <Route path="/anime" component={Landing} />
        <Redirect from="/" to="/movie" />
        <Redirect to="/404" />
      </Switch>
    </ThemeProvider>
  );
}
export default App;
