import React, { Component } from 'react';

export class SDIdenContentPicTxt extends Component {
  render () {
    return (
      <div className="SDIdenContent">
        <div id="firstRow">{this.props.values.name}</div>
        <div id="secondRow">{this.props.values.value}</div>
        <div id="thirdRow"><img src={this.props.values.src} /></div>
      </div>
          )
  }
}