import React from 'react'
import request from 'superagent'
import IssueList from './IssueList'
import Router from 'react-router'

export default React.createClass({
  mixins: [ Router.State ],

  loadIssues: function (page = 1) {
    request.get(`https://api.github.com/repos/rails/rails/issues?page=${page}`)
    .end(function (err, res) {
      this.setState({
        loading: false,
        issues: res.body
      })
    }.bind(this))
  },

  getInitialState: function() {
    return {loading: true}
  },

  componentDidMount: function () {
    this.loadIssues()
  },

  componentWillReceiveProps: function () {
    this.loadIssues(this.getQuery().page)
  },

  render: function () {
    if (this.state.loading) {
      return <div>Loading issues</div>
    }

    return <IssueList issues={this.state.issues} />
  }
})
