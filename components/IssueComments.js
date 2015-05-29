import React from 'react'
import {get} from 'axios'
import IssueCommentDetail from './IssueCommentDetail'

export default class IssueComments extends React.Component {
  render() {
    return (
      <ul>
        {this.props.comments.map(x => <li key={x.id}><IssueCommentDetail comment={x} /></li>)}
      </ul>
    )
  }
}
