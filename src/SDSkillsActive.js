import React, { Component } from 'react';
import {TableName} from './Name';
import {Skill} from './Skill';

const Marksmanship = {
  src: 'http://fate-go.cirnopedia.org/icons/skill/skill_017.png',
  alt: 'Marksmanship'
}

const PresenceDet = {
  src: 'http://fate-go.cirnopedia.org/icons/skill/skill_001.png',
  alt: 'Presence Detection'
}

const Knight = {
  src: 'http://fate-go.cirnopedia.org/icons/skill/skill_005.png',
  alt: 'Knight Tactics'
}

export class SDSkillsActive extends Component {
  render() {
    return(
    <div className="skillsDivision">
      <TableName name="Active Skills"/>
      <div className="skillsContainer">
        <Skill name="Marksmanship" rank="A+" src={Marksmanship.src}/>
        <Skill name="Presence Detection" rank="D+" src={PresenceDet.src}/>
        <Skill name="Knight Tactics" rank="C+" src={Knight.src}/>
      </div>
    </div>

    )
  }
}