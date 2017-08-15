import React, { Component } from 'react';

export class SDHeader extends Component {
  render () {
    return (
    <div>
    <h1>{this.props.name}</h1>
    <h2>{this.props.japname}</h2>
    </div>
    )
  }
}