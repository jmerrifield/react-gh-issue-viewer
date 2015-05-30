import React from 'react'
import {RouteHandler} from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Rails Issues</h1>

        <RouteHandler {...this.props}/>
      </div>
    )
  }
}
