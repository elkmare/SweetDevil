import React, { Component } from 'react';

export class SDIdenContentPic extends Component {
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