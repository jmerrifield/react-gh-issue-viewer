import React from 'react'
import TruncatedText from './TruncatedText'
import IssueLabels from './IssueLabels'
import User from './User'
import {Link} from 'react-router'

export default class Issue extends React.Component {
  render() {
    const {number, title, labels, user, body} = this.props.issue

    return (
      <div>
        <Link to='issue' params={{id: number}}>{number}</Link>
        <span>{title}</span>
        <span><IssueLabels labels={labels} /></span>
        <span><User user={user} /></span>
        <TruncatedText text={body} length={140} />
      </div>
    )
  }
}
