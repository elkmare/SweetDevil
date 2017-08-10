import React, { Component } from 'react';

export class SDAv extends Component {
  render () {
    return (
        <div className="avatar">
          <img
          src={this.props.src}
          alt={this.props.name}
          />
        </div>
    )
  }
}