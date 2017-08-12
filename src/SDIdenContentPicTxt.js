import React, { Component } from 'react';

export class SDIdenContentPicTxt extends Component {
  render () {
    return (
      <div className="SDIdenContent">
        <div id="firstRow">{this.props.name}</div>
        <div id="secondRow">{this.props.value}</div>
        <div id="thirdRow"><img src={this.props.src} /></div>
      </div>
          )
  }
}