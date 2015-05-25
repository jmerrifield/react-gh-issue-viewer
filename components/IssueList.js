import React from 'react'
import Issue from './Issue'
import {Link} from 'react-router'

export default class IssueList extends React.Component {
  render() {
    return (
      <div>
        {this.props.issues.map(x => <Issue key={x.id} issue={x} />)}

        <Link to='issues' query={{page: 2}}>Page 2</Link>
      </div>
    )
  }
}
