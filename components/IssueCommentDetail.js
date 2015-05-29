import React from 'react'
import User from './User'

export default class IssueCommentDetail extends React.Component {
  render() {
    const {user, body} = this.props.comment

    return (
      <div>
        <User user={user} />
        {body}
      </div>
    )
  }
}
