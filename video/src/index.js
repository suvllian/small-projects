import React from 'react';
import { render } from 'react-dom';
import router from './routes.js';

require('./pages/index.scss')

render(router, document.getElementById('app'));