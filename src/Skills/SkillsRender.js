import React, { Component } from 'react';
import {TableHeader} from '../Header';
import {SkillsInventory} from './SkillsInventory';
import {SkillsGroup} from './SkillsGroup';

export class SkillsRender extends Component {
  render () {
    return (


        <div className="skills">
            <TableHeader name={this.props.name}/>
            <div className="skillsType">

                {this.props.types.map((item) =>
                    <SkillsGroup key={item.name} type={item.name}>
                        {item.skills.map((subitem) =>
                        <SkillsInventory key={subitem.name} name={subitem.name} rank={subitem.rank} />
                    )}
                    </SkillsGroup>
                )}
            </div>
        </div>
            )
  }
}