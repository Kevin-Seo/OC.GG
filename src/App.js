import React from 'react';
import Main from './Main';
import Play from './Play';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Play" component={Play} />
      </Switch>
    </div>
  );
}

export default App;
