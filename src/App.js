import React from 'react';
import Main from './Main';
import Play from './Play';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/Play" component={Play} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
