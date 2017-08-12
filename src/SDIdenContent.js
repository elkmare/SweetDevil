import React, { Component } from 'react';

export class SDIdenContent extends Component {
  render () {
    return (
      <div className="SDIdenContent">
        <div id="firstRow">{this.props.name}</div>
        <div id="secondRow">{this.props.value}<br /><img src={this.props.src} /></div>
      </div>
          )
  }
}