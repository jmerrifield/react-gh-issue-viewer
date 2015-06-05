import React from 'react'
import {get} from 'axios'
import IssueDetail from './IssueDetail'

export default React.createClass({
  statics: {
    fetchData: function (params, query) {
      return get(`https://api.github.com/repos/rails/rails/issues/${params.id}`)
      .then(res => res.data)
    }
  },

  render: function () {
    const {issue} = this.props.data

    return <IssueDetail issue={issue} />
  }
})
