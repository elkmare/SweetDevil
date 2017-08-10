import React, { Component } from 'react';

export class SDBond extends Component {
  render () {
    return (
      <div className="bond">
        <div id="yellow">{this.props.bondName}</div>
        <div>{this.props.value}</div>
        <div>
          <img
            src={this.props.src}
            alt={this.props.name}
          />
        </div>
      </div>
    )
  }
}