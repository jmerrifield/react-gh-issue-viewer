import React from 'react'
import {get} from 'axios'

export default class IssueCommentsWrapper extends React.Component {
  state = {loading: true}

  componentDidMount() {
    if (this.props.issue.comments === 0) return

    require.ensure('./IssueCommentsController', function (require) {
      this.setState({
        loading: false,
        component: require('./IssueCommentsController')
      })
    }.bind(this))
  }

  render() {
    const {issue} = this.props

    if (issue.comments === 0) {
      return <div>NO COMMENTS</div>
    }

    if (this.state.loading) {
      return <div>LOADING MODULE!</div>
    }

    return <this.state.component issue={issue} />
  }
}
