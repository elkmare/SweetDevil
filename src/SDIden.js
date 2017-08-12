import React, { Component } from 'react';
import {SDIdenContent} from './SDIdenContent';
import {SDIdenHeader} from './SDIdenHeader';

const sweetDevilAv = {
    src: 'http://i.imgur.com/TYysU4h.jpg',
    alt: 'SweetDevilAvatar',
    width: '140px'
}

const sweetDevilBondPic = {
    src: 'http://i.imgur.com/wT0n2qj.png',
    alt: 'SweetDevilBond',
}

export class SDIden extends Component {
  render () {
    return (
      <div className="iden">
          <SDIdenHeader name="Identity"/>
          <div className="IdenColumns">
              <SDIdenContent src={sweetDevilAv} alt="Avatar"/>
              <SDIdenContent name="Lv." value="90 / 90" />
              <SDIdenContent name="ATK" value="17.236" />
              <SDIdenContent name="HP" value="15.511" />
              <SDIdenContent name="COST" value="16" />
              <SDIdenContent name="Bond Lv." value="5 / 5" src={sweetDevilBondPic} alt="Bond"/>
          </div>
      </div>
    )
  }
}