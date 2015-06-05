import React from 'react'
import {get} from 'axios'
import IssueDetail from './IssueDetail'

export default React.createClass({
  statics: {
    // There's definitely room to avoid this call most of the time, generally
    // this view would be accessed by navigating from a page of issues so *most*
    // of the time we would already have the issue already. It's possible
    // to navigate directly to this route though (/issues/12345) and in that
    // case you would need the call to get the issue.

    // You could abstract this away behind a flux-like store that could manage
    // fetching issues whether by the page or individually, and simplify this
    // view. But then you have to figure out when to discard issues from the
    // store, so you don't have 100's in memory while someone pages through
    // the issue list. Also sometimes the Github API provides extra detail in the
    // response for an individual item than in the list, so you have the problem
    // of alternate representations in the store for a given entity of the same
    // type with the same ID.

    // For this project, hitting the API for the specific issue we're viewing
    // seems to be the most straightforward implementation.
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
