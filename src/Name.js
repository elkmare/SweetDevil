import React, { Component } from 'react';

export class TableName extends Component {
  render() {
    return (
<div className="tableName">{this.props.name}</div>
    )
  }
}