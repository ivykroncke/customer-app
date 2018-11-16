import './global.css'

import React from "react";
import ReactDOM from 'react-dom';
import App from './App'

import createHistory from 'history/createBrowserHistory'


const history = createHistory()



ReactDOM.render(
  <App />,
  document.getElementById('root')
);