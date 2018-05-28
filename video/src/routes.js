import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './pages/common/index.jsx';
import Home from './pages/home/index.jsx';
import Login from './pages/login/index.jsx';
import Register from './pages/login/register.jsx';
import Upload from './pages/upload/index.jsx';
import Person from './pages/person/index.jsx';

const router =
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path="/home/:type" component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/upload' component={Upload} />
    <Route path='/person/:type' component={Person} />
  </Route>

export default router;
