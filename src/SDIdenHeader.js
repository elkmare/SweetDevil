import React, { Component } from 'react';

export class SDIdenHeader extends Component {
  render () {
    return (
      <div className="tableHeader">{this.props.name}</div>
    )
  }
}