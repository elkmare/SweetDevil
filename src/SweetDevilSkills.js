import React, { Component } from 'react';

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

export class SweetDevilSkills extends Component {
  render() {
    return (
      <table className="skills">
        <tr>
          <th colSpan="6">Skills</th>
        </tr>
        <tr>
          <td colSpan="3" id="kolor">Aktive Skills</td>
          <td colSpan="3" id="kolor">Passive Skills</td>
        </tr>
        <tr>
          <td>Marksmanship A+</td>
          <td>Presence Detection D+</td>
          <td>Knight Tactics C+</td>
          <td>Presence Concealment C-</td>
          <td>Experience Point Bonus B-</td>
          <td>Cosmo Reactor A+</td>
        </tr>
        <tr>
          <td>
            <img 
            src={Marksmanship.src}
            alt={Marksmanship.alt} />
          </td>
          <td>
            <img 
            src={PresenceDet.src}
            alt={PresenceDet.alt} />
          </td>
          <td>
            <img 
            src={Knight.src}
            alt={Knight.alt} />
          </td>
          <td>
            <img 
            src={PresenceCon.src}
            alt={PresenceCon.alt} />
          </td>
          <td>
            <img 
            src={Experience.src}
            alt={Experience.alt} />
          </td>
          <td>
            <img 
            src={Cosmo.src}
            alt={Cosmo.alt} />
          </td>
        </tr>
      </table>
    )
  }
}