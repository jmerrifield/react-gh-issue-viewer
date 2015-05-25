require('babel/polyfill')

import React from 'react'
import Router from 'react-router'

let {Route, RouteHandler, DefaultRoute, HistoryLocation} = Router

import IssueListController from './components/IssueListController'

class App extends React.Component {
  render() {
    console.log('APP Render', this.props)
    return (
      <div>
        <h1>Rails Issues</h1>

        <RouteHandler/>
      </div>
    )
  }
}

let routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='issues' path='/issues' handler={IssueListController} />
    <DefaultRoute handler={IssueListController} />
  </Route>
)

Router.run(routes, HistoryLocation, Handler => {
  React.render(<Handler />, document.getElementById('app'))
})
