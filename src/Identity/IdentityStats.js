import React, { Component } from 'react';

export class IdentityStats extends Component {
  render () {
    return (
      <div className="SDIdenContent">
        <div id="firstRow">{this.props.name}</div>
        <div id="secondRow">{this.props.value}</div>
      </div>
          )
  }
}