import React, { Component } from 'react';

const sweetDevilAv = {
    src: 'http://i.imgur.com/TYysU4h.jpg',
    alt: 'SweetDevilAvatar',
    width: '140px'
}

export class SweetDevilAv extends Component {
  render () {
    return (
      <tr>
        <td rowSpan ="4">
          <img 
          src={sweetDevilAv.src}
          alt={sweetDevilAv.alt} />
        </td>
      </tr>

    )
  }
}