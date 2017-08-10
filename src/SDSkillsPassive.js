import React, { Component } from 'react';
import {TableName} from './Name';
import {Skill} from './Skill';

const PresenceCon = {
  src: 'http://fate-go.cirnopedia.org/icons/skill/skill_028.png',
  alt: 'Presence Concealment'
}

const Experience = {
  src: 'http://fate-go.cirnopedia.org/icons/skill/skill_027.png',
  alt: 'Experience Point Bonus'
}

const Cosmo = {
  src: 'http://fate-go.cirnopedia.org/icons/skill/skill_033.png',
  alt: 'Cosmo Reactor'
}

export class SDSkillsPassive extends Component {
  render() {
    return(
    <div className="skillsDivision">
      <TableName name="Passive Skills"/>
      <div className="skillsContainer">
        <Skill name="Presence Concealment" rank="C-" src={PresenceCon.src}/>
        <Skill name="Experience Point Bonus" rank="B-" src={Experience.src}/>
        <Skill name="Cosmo Reactor" rank="A+" src={Cosmo.src}/>
      </div>
    </div>

    )
  }
}