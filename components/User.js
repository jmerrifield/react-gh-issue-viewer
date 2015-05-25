import React from 'react'

export default class User extends React.Component {
  render() {
    const {login, avatar_url} = this.props.user

    return (
      <div>
        <img src={avatar_url} alt={`${login} avatar`} style={{width: 40, height: 40}}/>
        <span>{login}</span>
      </div>
    )
  }
}
