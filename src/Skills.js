import React, { Component } from 'react';
import {TableHeader} from './Header';
import {Skill} from './Skill';
import {SDSkillsGroup} from './SDSkillsGroup';

export class Skills extends Component {
  render () {
    return (


        <div className="skills">
            <TableHeader name={this.props.name}/>
            <div className="skillsType">

                {this.props.types.map((item) =>
                    <SDSkillsGroup key={item.name} type={item.name}>
                        {item.skills.map((subitem) =>
                        <Skill key={subitem.name} name={subitem.name} rank={subitem.rank} />
                    )}
                    </SDSkillsGroup>
                )}
            </div>
        </div>
            )
  }
}