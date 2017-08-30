import React, { Component } from 'react';

export class IdentityAvatar extends Component {
  render () {
    return (
      <div className="SDIdenContentPic">
        <div>
          <img src={this.props.value.src} />
          </div>
      </div>
          )
  }
}