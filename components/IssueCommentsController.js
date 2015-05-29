import React from 'react'
import {get} from 'axios'
import IssueComments from './IssueComments'

export default class IssueCommentsController extends React.Component {
  state = {loading: true}

  componentDidMount() {
    if (this.props.issue.comments === 0) return

    get(this.props.issue.comments_url)
    .then(res => {
      this.setState({
        loading: false,
        comments: res.data
      })
    })
  }

  render() {
    const {comments} = this.props.issue

    if (comments === 0) {
      return <div>NO COMMENTS</div>
    }

    if (this.state.loading) {
      return <div>LOADING</div>
    }

    return <IssueComments comments={this.state.comments} />
  }
}
