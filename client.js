require('babel/polyfill')

import React from 'react'
import Router, {Route, RouteHandler, DefaultRoute, HistoryLocation} from 'react-router'
import Promise from 'bluebird'

import IssueListController from './components/IssueListController'
import IssueController from './components/IssueController'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Rails Issues</h1>

        {this.props.firstLoad && (<div>LOADING</div>)}

        <RouteHandler {...this.props}/>
      </div>
    )
  }
}

let routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='issues' path='/issues' handler={IssueListController} />
    <Route name='issue' path='/issue/:id' handler={IssueController} />
    <DefaultRoute name='issues-home' handler={IssueListController} />
  </Route>
)

let firstLoad = true

Router.run(routes, HistoryLocation, function (Handler, state) {
  console.log('Routing', state)

  // TODO: Trigger loading indicator somehow

  var promises = state.routes
  .filter(r => r.handler.fetchData)
  .reduce((promises, route) => {
    // reduce to a hash of `key:promise`
    promises[route.name] = route.handler.fetchData(state.params, state.query)
    return promises
  }, {})

  if (firstLoad) {
    React.render(<Handler data={{}} firstLoad={true}/>, document.getElementById('app'))
  }

  Promise.props(promises).then(function (data) {
    console.log('DATA FETCHED', Handler, data)
    firstLoad = false
    React.render(<Handler data={data}/>, document.getElementById('app'))
  })
})
