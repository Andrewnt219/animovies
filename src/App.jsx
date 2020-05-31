import React, { useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Landing from 'Pages/Landing';
import { ThemeProvider } from 'styled-components';
import movieTheme from 'Theme/movieTheme';
import MoviePage from 'Pages/MoviePage';
// import AnimePage from 'Pages/AnimePage';
import GlobalStyle from 'Theme/global';
import ItemDetail from 'Pages/ItemDetail';
import Genre from 'Pages/Genre';
import SearchResults from 'Pages/SearchResults';
import ThemeSwitcher from 'Components/ThemeSwitcher';

function App() {
  const [theme, setTheme] = useState(movieTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <ThemeSwitcher switchTheme={setTheme} />
      <Switch>
        <Route path="/:api/discover/:genreName/:page" component={Genre} />
        <Route path="/:api/:itemType/:itemId" component={ItemDetail} />

        <Route path="/tmdb/search" component={SearchResults} />
        <Route path="/:api/all" component={MoviePage} />
        {/* <Route path="/jikan/all" component={AnimePage} /> */}

        <Route path="/:api" component={Landing} />

        <Redirect from="/" to="/tmdb" />
        <Redirect to="/404" />
      </Switch>
    </ThemeProvider>
  );
}
export default App;
