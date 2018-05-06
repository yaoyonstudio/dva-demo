import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import HomePage from './routes/Home/HomePage';
import TestPage from './routes/TestPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/test" exact component={TestPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
