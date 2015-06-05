import React from 'react'
import {get} from 'axios'
import IssueComments from './IssueComments'

export default class IssueCommentsController extends React.Component {
  state = {loading: true}

  componentDidMount() {
    get(this.props.issue.comments_url)
    .then(res => {
      this.setState({
        loading: false,
        comments: res.data
      })
    })
  }

  render() {
    const {comments, loading} = this.state

    if (loading) {
      return <div>LOADING</div>
    }

    return <IssueComments comments={comments} />
  }
}
