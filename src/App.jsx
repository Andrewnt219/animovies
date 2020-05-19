import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from 'Pages/Landing';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/anime" render={() => <div>Anime</div>} />
    </Switch>
  );
}

export default App;
