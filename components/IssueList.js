import React from 'react'
import Issue from './Issue'
import {Link} from 'react-router'

export default class IssueList extends React.Component {
  render() {
    return (
      const {issues, prevPage, nextPage} = this.props.issues

      <div>
        {issues.map(x => (
          <Issue key={x.id} issue={x} />
        ))}

        <Link to='issues' query={{page: prevPage}}>Prev</Link>
        <Link to='issues' query={{page: nextPage}}>Next</Link>
      </div>
    )
  }
}
