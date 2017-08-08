import React, { Component } from 'react';

const sweetDevilPic = {
  src: 'http://i.imgur.com/qNhI9aL.jpg',
  alt: 'Sweet Devil',
  width: '300px'
}

const sweetDevilPicBack = {
  src: 'http://i.imgur.com/EOiTnH3.png',
  alt: 'Sweet Devil Reverse',
  width: '300px'
}

export class SweetDevilPic extends Component {
    render() {
        return (
            <img 
            src={sweetDevilPic.src}
            alt={sweetDevilPic.alt}
            width={sweetDevilPic.width} />
        )
    }
}