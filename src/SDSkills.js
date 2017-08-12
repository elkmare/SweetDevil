import React, { Component } from 'react';
import {Skill} from './Skill';
import {TableHeader} from './Header';
import {TableName} from './Name';
import {SDSkillsActive} from './SDSkillsActive';
import {SDSkillsPassive} from './SDSkillsPassive';
import {SDSkillsGroup} from './SDSkillsGroup';

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

export class SDSkills extends Component {
  render() {
    return (
      <div className="skills">
        <TableHeader name="Skills"/>
        <div className="skillsType">
          <SDSkillsGroup type="Active Skills">
            <Skill name="Marksmanship" rank="A+" src={Marksmanship.src}/>
            <Skill name="Presence Detection" rank="D+" src={PresenceDet.src}/>
            <Skill name="Knight Tactics" rank="C+" src={Knight.src}/>
          </SDSkillsGroup>
          <SDSkillsGroup type="Passive Skills">
            <Skill name="Presence Concealment" rank="C-" src={PresenceCon.src}/>
            <Skill name="Experience Point Bonus" rank="B-" src={Experience.src}/>
            <Skill name="Cosmo Reactor" rank="A+" src={Cosmo.src}/>
          </SDSkillsGroup>
        </div>
      </div>
    )
  }
}