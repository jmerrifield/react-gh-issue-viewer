import React from 'react'
import {get} from 'axios'
import IssueList from './IssueList'
import parseLinkHeader from 'parse-link-header'

export default React.createClass({
  statics: {
    fetchData: function (params, query) {
      return get(`https://api.github.com/repos/rails/rails/issues?page=${query.page || 1}`)
      .then(res => {
        let links = parseLinkHeader(res.headers.link)

        return {
          prevPage: links.prev && links.prev.page,
          nextPage: links.next && links.next.page,
          issues: res.data
        }
      })
    }
  },

  render: function () {
    let issues = this.props.data.issues || this.props.data['issues-home']

    if (!issues) return <div />

    return <IssueList issues={issues} />
  }
})
