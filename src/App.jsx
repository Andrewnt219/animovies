import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(JSON.parse(localTheme));
  }, []);

  return (
    <ThemeProvider theme={theme ?? movieTheme}>
      <GlobalStyle />

      <ThemeSwitcher currentTheme={theme} switchTheme={setTheme} />
      <Switch>
        <Route path="/tmdb/discover/:genreName/:page" component={Genre} />
        <Route path="/tmdb/:itemType/:itemId" component={ItemDetail} />

        <Route path="/tmdb/search" component={SearchResults} />
        <Route path="/tmdb/all" component={MoviePage} />
        {/* <Route path="/jikan/all" component={AnimePage} /> */}

        <Route path="/tmdb" component={Landing} />
        <Route path="/404" render={() => <h1>404</h1>} />

        <Redirect from="/" to="/tmdb" exact />
        <Redirect to="/404" />
      </Switch>
    </ThemeProvider>
  );
}
export default App;
