import React, { Component } from 'react';

export class TableHeader extends Component {
  render() {
    return (
<div className="tableHeader">{this.props.name}</div>
    )
  }
}