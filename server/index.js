import express from 'express'
import React from 'react'

const app = express()

function delay(req, res, next) {
  setTimeout(next, 2000)
}

// Uncomment to simulate slow asset delivery for testing async module load
// app.use([delay, require('express').static(__dirname)])

app.use(require('express').static(__dirname))

import Routes from '../Routes'
import Router from 'react-router'
import Promise from 'bluebird'

app.use(function (req, res) {
  Router.run(Routes, req.url, function (Handler, state) {
    var promises = state.routes
    .filter(r => r.handler.fetchData)
    .reduce((promises, route) => {
      // reduce to a hash of `key:promise`
      promises[route.name] = route.handler.fetchData(state.params, state.query)
      return promises
    }, {})

    Promise.props(promises).then(function (data) {
      let content = React.renderToString(<Handler data={data}/>)
      res.render('index.ejs', {content, data})
    })
  })
})

app.listen(8080)
