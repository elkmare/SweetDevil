import React, { Component } from 'react';

const sweetDevilBondPic = {
    src: 'http://i.imgur.com/wT0n2qj.png',
    alt: 'SweetDevilBond',
}

export class SDBondPic extends Component {
  render () {
    return (
      <img 
      src={sweetDevilBondPic.src}
      alt={sweetDevilBondPic.alt} />
    )
  }
}