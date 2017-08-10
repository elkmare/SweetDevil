import React, { Component } from 'react';
import {Skill} from './Skill';
import {TableHeader} from './Header';
import {TableName} from './Name';
import {SDSkillsActive} from './SDSkillsActive';
import {SDSkillsPassive} from './SDSkillsPassive';

export class SDSkills extends Component {
  render() {
    return (
      <div className="skills">
        <TableHeader name="Skills"/>
        <div className="skillsType">
          <SDSkillsActive />
          <SDSkillsPassive />
        </div>
      </div>
    )
  }
}