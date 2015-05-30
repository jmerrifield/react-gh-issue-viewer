import express from 'express'
import React from 'react'

const app = express()

function delay(req, res, next) {
  setTimeout(next, 2000)
}

// Uncomment to simulate slow asset delivery for testing async module load
// app.use([delay, require('express').static(__dirname)])

app.use(require('express').static(__dirname))

import App from '../App'

app.use(function (req, res) {
  App(req.url, {}, function (Handler, data, state) {
    let content = React.renderToString(<Handler data={data}/>)
    res.render('index.ejs', {content, data: {[state.path]: data}})
  })
})

app.listen(8080)
