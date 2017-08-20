import React, { Component } from 'react';
import {TableName} from './Name';
import {Skill} from './Skill';

export class SDSkillsGroup extends Component {
  render() {
    return(
    <div className="skillsDivision">
      <TableName name={this.props.type}/>
      <div className="skillsContainer">
        {this.props.children}
      </div>
    </div>

    )
  }
}