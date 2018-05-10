import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React from 'react';
import App from './pages/common/index.jsx';
import Home from './pages/home/index.jsx';
import About from './pages/about/index.jsx';
import Person from './pages/person/index.jsx';
import Login from './pages/login/index.jsx';
import Register from './pages/login/register.jsx';

const router =
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path="/home/:type" component={Home} />
      <Route path='/about' component={About} />
      <Route path='/person' component={Person} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Route>
  </Router>

export default router;
