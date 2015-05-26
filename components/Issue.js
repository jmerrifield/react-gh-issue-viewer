import React from 'react'
import TruncatedText from './TruncatedText'
import IssueLabels from './IssueLabels'
import User from './User'
import {Link} from 'react-router'

export default class Issue extends React.Component {
  render() {
    const {issue} = this.props

    return (
      <div>
        <Link to='issue' params={{id: issue.number}}>{issue.number}</Link>
        <span>{issue.title}</span>
        <span><IssueLabels labels={issue.labels} /></span>
        <span><User user={issue.user} /></span>
        <TruncatedText text={issue.body} length={140} />
      </div>
    )
  }
}
