require('babel/polyfill')

import React from 'react'
import Router, {HistoryLocation} from 'react-router'
import Promise from 'bluebird'
import Routes from './Routes'

let firstLoad = true

Router.run(Routes, HistoryLocation, function (Handler, state) {
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
