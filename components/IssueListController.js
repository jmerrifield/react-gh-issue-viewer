import React from 'react'
import request from 'superagent'
import IssueList from './IssueList'

export default class IssueListController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading: true}
  }

  componentDidMount() {
    request.get('https://api.github.com/repos/rails/rails/issues')
    .end(function (err, res) {
      this.setState({
        loading: false,
        issues: res.body
      })
    }.bind(this))
  }

  render() {
    if (this.state.loading) {
      return <div>Loading issues</div>
    }

    return <IssueList issues={this.state.issues} />
  }
}
