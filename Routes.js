import React from 'react'
import {Route, DefaultRoute} from 'react-router'
import App from './components/App'
import IssueListController from './components/IssueListController'
import IssueController from './components/IssueController'

export default (
  <Route name='app' path='/' handler={App}>
    <Route name='issues' path='/issues' handler={IssueListController} />
    <Route name='issue' path='/issue/:id' handler={IssueController} />
    <DefaultRoute name='issues-home' handler={IssueListController} />
  </Route>
)
