import React from 'react'
import IssueLabels from './IssueLabels'
import User from './User'
import IssueCommentsWrapper from './IssueCommentsWrapper'

export default class Issue extends React.Component {
  render() {
    const {issue} = this.props

    return (
      <div>
        <div>{issue.number}</div>
        <div>{issue.title}</div>
        <div>{issue.state}</div>
        <div><IssueLabels labels={issue.labels} /></div>
        <div><User user={issue.user} /></div>
        <div>{issue.body}</div>
        <IssueCommentsWrapper issue={issue} />
      </div>
    )
  }
}
