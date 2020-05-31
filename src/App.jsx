import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'Theme/global';
import movieTheme from 'Theme/movieTheme';
import ThemeSwitcher from 'Components/ThemeSwitcher';
import LoadingIndicator from 'Components/ui/LoadingIndicator/LoadingIndicator';

const Landing = React.lazy(() => import('Pages/Landing'));
const MoviePage = React.lazy(() => import('Pages/MoviePage'));
const ItemDetail = React.lazy(() => import('Pages/ItemDetail'));
const Genre = React.lazy(() => import('Pages/Genre'));
const SearchResults = React.lazy(() => import('Pages/SearchResults'));

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
      <Suspense fallback={<LoadingIndicator />}>
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
      </Suspense>
    </ThemeProvider>
  );
}
export default App;
