require('babel/polyfill')

import React from 'react'
import Router, {HistoryLocation} from 'react-router'
import Promise from 'bluebird'
import Routes from './Routes'

Router.run(Routes, HistoryLocation, function (Handler, state) {
  // TODO: Trigger loading indicator somehow

  if (window.bootstrapData) {
    let data = window.bootstrapData
    delete window.bootstrapData
    React.render(<Handler data={data}/>, document.getElementById('app'))
    return
  }

  var promises = state.routes
  .filter(r => r.handler.fetchData)
  .reduce((promises, route) => {
    // reduce to a hash of `key:promise`
    promises[route.name] = route.handler.fetchData(state.params, state.query)
    return promises
  }, {})

  Promise.props(promises).then(function (data) {
    React.render(<Handler data={data}/>, document.getElementById('app'))
  })
})
