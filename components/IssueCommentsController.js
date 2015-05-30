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
    const {comments} = this.props.issue

    if (this.state.loading) {
      return <div>LOADING</div>
    }

    return <IssueComments comments={this.state.comments} />
  }
}
