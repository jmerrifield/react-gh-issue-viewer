import React from 'react'

export default class IssueLabel extends React.Component {
  render() {
    const {name, color} = this.props.label

    return <span style={{color}}>{name}</span>
  }
}
