require('babel/polyfill')

import React from 'react'
import IssueListController from './components/IssueListController'

React.render(
  <IssueListController />,
  document.getElementById('app')
)
