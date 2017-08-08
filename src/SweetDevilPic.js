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
  constructor(props) {
    super(props);
    this.state = {reversed: false};
    this.handleOnClick=this.handleOnClick.bind(this);
  }
  
  handleOnClick() {
    const newState = this.state.reversed == false ? true : false;
    this.setState({reversed: newState});
  }

  render() {
    if(this.state.reversed == false) {
    return (
      <img 
      src={sweetDevilPic.src}
      alt={sweetDevilPic.alt}
      width={sweetDevilPic.width}
      onClick={this.handleOnClick} />
    )
    }
    else {
    return (
      <img 
      src={sweetDevilPicBack.src}
      alt={sweetDevilPicBack.alt}
      width={sweetDevilPicBack.width} 
      onClick={this.handleOnClick}/>
    )
    }
  }
}