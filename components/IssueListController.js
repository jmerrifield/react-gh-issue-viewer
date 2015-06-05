import React from 'react'
import {get} from 'axios'
import IssueList from './IssueList'
import parseLinkHeader from 'parse-link-header'

export default React.createClass({
  statics: {
    fetchData: function (params, query) {
      const {page} = query

      return get(`https://api.github.com/repos/rails/rails/issues?page=${page || 1}`)
      .then(res => {
        const links = parseLinkHeader(res.headers.link)

        return {
          prevPage: links.prev && links.prev.page,
          nextPage: links.next && links.next.page,
          issues: res.data
        }
      })
    }
  },

  render: function () {
    // This Controller view is used by 2 separate routes (the 'issues' route
    // and the default route named 'issues-home'). It's a bit of an ugly special
    // case but it seems to work. Pick whichever key the issues are supplied
    // under.

    const issues = this.props.data['issues'] || this.props.data['issues-home']

    return <IssueList issues={issues} />
  }
})
