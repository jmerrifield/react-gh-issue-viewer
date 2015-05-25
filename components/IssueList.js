import React from 'react'
import Issue from './Issue'

export default class IssueList extends React.Component {
  render() {
    return (
      <div>
        {this.props.issues.map(x => <Issue key={x.id} issue={x} />)}
      </div>
    )
  }
}
