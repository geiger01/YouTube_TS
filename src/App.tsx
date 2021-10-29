import React from 'react';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router';

export const App=()=>{
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

