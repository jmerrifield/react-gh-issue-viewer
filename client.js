require('babel/polyfill')

import React from 'react'
import {HistoryLocation} from 'react-router'
import App from './App'

App(HistoryLocation, window.bootstrapData, function (Handler, data) {
  React.render(<Handler data={data}/>, document.getElementById('app'))
})
