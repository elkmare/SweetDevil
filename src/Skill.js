import React, { Component } from 'react';

const URLS = {
  'Experience Point Bonus': 'http://fate-go.cirnopedia.org/icons/skill/skill_027.png',
  'Marksmanship': 'http://fate-go.cirnopedia.org/icons/skill/skill_017.png',
  'Presence Detection': 'http://fate-go.cirnopedia.org/icons/skill/skill_001.png',
  'Knight Tactics': 'http://fate-go.cirnopedia.org/icons/skill/skill_005.png',
  'Presence Concealment': 'http://fate-go.cirnopedia.org/icons/skill/skill_028.png',
  'Cosmo Reactor': 'http://fate-go.cirnopedia.org/icons/skill/skill_033.png',
  'Charisma': 'http://fate-go.cirnopedia.org/icons/skill/skill_001.png',
  'Golden Rule': 'http://fate-go.cirnopedia.org/icons/skill/skill_016.png',
  'Treasury of Babylon': 'http://fate-go.cirnopedia.org/icons/skill/skill_020.png',
  'Independent Action': 'http://fate-go.cirnopedia.org/icons/skill/skill_029.png',
  'Magic Resistance': 'http://fate-go.cirnopedia.org/icons/skill/skill_027.png',
  'Divinity': 'http://fate-go.cirnopedia.org/icons/skill/skill_002.png',

}

export class Skill extends Component {
  render() {
    const url = URLS[this.props.name];
    return (
        <div>
          <div className="cellMargin">{this.props.name} {this.props.rank}</div>
          <div className="cellMargin">
            <img 
              src={url}
              alt={this.props.name} />
          </div>
        </div>
    )
  }
}