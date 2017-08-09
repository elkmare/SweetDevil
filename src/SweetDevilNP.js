import React, { Component } from 'react';

const buster = {
  src: 'http://fate-go.cirnopedia.org/icons/pattern/pattern_03.png',
  alt: 'Buster',
}

export class SweetDevilNP extends Component {
  render() {
    return(
      <table className="nobleph">
        <tr>
          <th colSpan="9">Noble Phantasm</th>
        </tr>
        <tr>
          <td rowSpan="2"><img 
            src={buster.src}
            alt={buster.alt} />
          </td>
          <td rowSpan="2" id ="kolor">No Second Strike <br /> (二度目のストライクはない)</td>
          <td>Target</td>
          <td>Rank</td>
          <td>lvl. 1</td>
          <td>lvl. 2</td>
          <td>lvl. 3</td>
          <td>lvl. 4</td>
          <td>lvl. 5</td>
        </tr>
        <tr>
          <td>All enemies</td>
          <td>C-</td>
          <td>300%</td>
          <td>400%</td>
          <td>450%</td>
          <td>500%</td>
          <td>550%</td>
        </tr>
      </table>
    )
  }
}