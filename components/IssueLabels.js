import React from 'react'
import IssueLabel from './IssueLabel'

export default class IssueLabels extends React.Component {
  static propTypes = {
    labels: React.PropTypes.array
  }

  render() {
    return (
      <div>
        {this.props.labels.map(x => (
          <IssueLabel key={x.name} label={x} />
        ))}
      </div>
    )
  }
}
