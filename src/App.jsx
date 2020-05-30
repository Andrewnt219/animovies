import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Landing from 'Pages/Landing';
import { ThemeProvider } from 'styled-components';
import movieTheme from 'Theme/movieTheme';
import animeTheme from 'Theme/animeTheme';
import MoviePage from 'Pages/MoviePage';
// import AnimePage from 'Pages/AnimePage';
import GlobalStyle from 'Theme/global';
import ItemDetail from 'Pages/ItemDetail';
import Genre from 'Pages/Genre';

function App() {
  const { pathname } = useLocation();

  return (
    <ThemeProvider theme={pathname.includes('jikan') ? animeTheme : movieTheme}>
      <GlobalStyle />
      <Switch>
        <Route path="/:api/discover/:genreName/:page" component={Genre} />
        <Route path="/:api/:itemType/:itemId" component={ItemDetail} />

        <Route path="/:api/all" component={MoviePage} />
        {/* <Route path="/jikan/all" component={AnimePage} /> */}

        <Route path="/user" render={() => <div>User</div>} />
        <Route path="/favorite" render={() => <div>Favorite</div>} />

        <Route path="/:api" component={Landing} />

        <Redirect from="/" to="/tmdb" />
        <Redirect to="/404" />
      </Switch>
    </ThemeProvider>
  );
}
export default App;
