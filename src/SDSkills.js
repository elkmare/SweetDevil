import React, { Component } from 'react';
import {Skill} from './Skill';
import {TableHeader} from './Header';
import {TableName} from './Name';
import {SDSkillsGroup} from './SDSkillsGroup';

export class SDSkills extends Component {
  render() {
    return (
      <div className="skills">
        <TableHeader name="Skills"/>
        <div className="skillsType">
          <SDSkillsGroup type="Active Skills">
            <Skill name="Marksmanship" rank="A+"/>
            <Skill name="Presence Detection" rank="D+"/>
            <Skill name="Knight Tactics" rank="C+"/>
          </SDSkillsGroup>
          <SDSkillsGroup type="Passive Skills">
            <Skill name="Presence Concealment" rank="C-"/>
            <Skill name="Experience Point Bonus" rank="B-"/>
            <Skill name="Cosmo Reactor" rank="A+"/>
          </SDSkillsGroup>
        </div>
      </div>
    )
  }
}