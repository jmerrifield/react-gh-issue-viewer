import React from 'react'
import ellipsize from 'ellipsize'

export default class TruncatedText extends React.Component {
  static propTypes = {
    text: React.PropTypes.string,
    length: React.PropTypes.number
  }

  render() {
    const {text, length} = this.props

    return <span>{ellipsize(text, length)}</span>
  }
}
