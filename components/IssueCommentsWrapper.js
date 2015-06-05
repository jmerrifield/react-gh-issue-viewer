import React from 'react'
import {get} from 'axios'

// The issue comments component is tiny, there's definitely no need to split
// the code. However, the idea of lazy-loading optional, heavy, parts of the view
// is a hot topic at work as the size of our SPA increases, so I wanted to try
// out this feature of webpack and see how it works with React.

// This is a basic wrapper component to detect if we should show the comments
// component, and if so, require the component and render it.
export default class IssueCommentsWrapper extends React.Component {
  state = {loading: true}

  componentDidMount() {
    const {issue} = this.props

    if (issue.comments === 0) {
      return
    }

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

    const {loading, component} = this.state

    if (loading) {
      return <div>LOADING COMMENTS VIEWER!</div>
    }

    return <component issue={issue} />
  }
}
