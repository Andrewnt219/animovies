import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Landing from 'Pages/Landing';
import { ThemeProvider } from 'styled-components';
import movieTheme from 'Theme/movieTheme';
import animeTheme from 'Theme/animeTheme';

function App(props) {
  return (
    <ThemeProvider
      theme={
        props.location.pathname.includes('movie') ? movieTheme : animeTheme
      }
    >
      <Switch>
        <Route path="/movie" exact component={Landing} />
        <Route path="/anime" render={Landing} />
        <Redirect from="/" to="/movie" exact />
      </Switch>
    </ThemeProvider>
  );
}

export default withRouter(App);
