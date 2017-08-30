import React, { Component } from 'react';
import {SkillsTableHeader} from './SkillsTableHeader';
import {SkillsInventory} from './SkillsInventory';

export class SkillsGroup extends Component {
  render() {
    return(
    <div className="skillsDivision">
      <SkillsTableHeader name={this.props.type}/>
      <div className="skillsContainer">
        {this.props.children}
      </div>
    </div>

    )
  }
}