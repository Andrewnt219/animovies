import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Landing from 'Pages/Landing';
import { ThemeProvider } from 'styled-components';
import movieTheme from 'Theme/movieTheme';
import animeTheme from 'Theme/animeTheme';
import { AnimatePresence } from 'framer-motion';
import Anime from 'Pages/Anime';
import Movie from 'Pages/Movie';
function App(props) {
  return (
    <ThemeProvider
      theme={
        props.location.pathname.includes('movie') ? movieTheme : animeTheme
      }
    >
      <AnimatePresence>
        <Switch>
          <Route path="/movie" exact component={Landing} />
          <Route path="/anime" exact component={Landing} />
          <Route path="/anime/all" exact component={Anime} />
          <Route path="/movie/all" exact component={Movie} />
          <Redirect from="/" to="/movie" exact />
          <Redirect to="/404" exact />
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default withRouter(App);
