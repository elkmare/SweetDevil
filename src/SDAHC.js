import React, { Component } from 'react';

export class SDAHC extends Component {
  render () {
    return(
      <div className="cellTypes">
        <div id="blue">{this.props.type}</div>
        <div>{this.props.value}</div>
      </div>
    )
  }
}