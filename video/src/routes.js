import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React from 'react';
import App from './pages/common/index.jsx';
import Home from './pages/home/index.jsx';
import About from './pages/about/index.jsx';

const router =
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path="/home/:type" component={Home} />
      <Route path='/about' component={About} />
    </Route>
  </Router>

export default router;
