import React, { Component } from 'react';

export class ServantName extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.values.name} {this.props.values.rate}</h1>
        <h2>{this.props.values.japname}</h2>
      </div>
    )
  }
}