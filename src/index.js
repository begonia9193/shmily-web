import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Redirect, Route } from 'react-router-dom'

import App from './App.jsx'
import './less/index.less'

ReactDom.render(
  <Router>
    <Route path='/' component={ App } />
  </Router>,
  document.getElementById('root')
)
