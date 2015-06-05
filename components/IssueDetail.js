import React from 'react'
import IssueLabels from './IssueLabels'
import User from './User'
import IssueCommentsWrapper from './IssueCommentsWrapper'

export default class Issue extends React.Component {
  render() {
    const {issue: {number, title, state, labels, user, body}, issue} = this.props

    return (
      <div>
        <div>{number}</div>
        <div>{title}</div>
        <div>{state}</div>
        <div><IssueLabels labels={labels} /></div>
        <div><User user={user} /></div>
        <div>{body}</div>
        <IssueCommentsWrapper issue={issue} />
      </div>
    )
  }
}
