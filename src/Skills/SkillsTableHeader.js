import React, { Component } from 'react';

export class SkillsTableHeader extends Component {
  render() {
    return (
<div className="tableName">{this.props.name}</div>
    )
  }
}