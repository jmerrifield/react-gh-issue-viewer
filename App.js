import Routes from './Routes'
import Router from 'react-router'
import Promise from 'bluebird'

export default function (url, initialData, onRoute) {
  Router.run(Routes, url, function (Handler, state) {
    let initData = initialData[state.path]
    if(initData) {
      // Make sure we don't use the cached data again for this route
      delete initialData[state.path]
      return onRoute(Handler, initData, state)
    }

    var promises = state.routes
    .filter(r => r.handler.fetchData)
    .reduce((promises, route) => {
      // reduce to a hash of `key:promise`
      promises[route.name] = route.handler.fetchData(state.params, state.query)
      return promises
    }, {})

    Promise.props(promises).then(function (data) {
      onRoute(Handler, data, state)
    })
  })
}
