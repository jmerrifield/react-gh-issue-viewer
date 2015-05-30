import React from 'react'
import {RouteHandler} from 'react-router'

export default class App extends React.Component {
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
