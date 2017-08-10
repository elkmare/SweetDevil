import React, { Component } from 'react';
import {SDAv} from './SDAv';
import {SDAHC} from './SDAHC';
import {SDBond} from './SDBond';
import {SDLvl} from './SDLvl';
import {SDIdenHeader} from './SDIdenHeader'

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
        
          <SDAv name ="Sweet Devil" src={sweetDevilAv.src}/>
        <div className="idenContent">
              <SDLvl levelName="Lv." level="90 / 90"/>
            <div className='types'>
              <SDAHC type="ATK" value="17.236"/>
              <SDAHC type="HP" value="15.511"/>
              <SDAHC type="COST" value="16"/>
            </div>
              <SDBond bondName="Bond Lv." value="5 / 5" src={sweetDevilBondPic.src}/>
            </div>
        </div>
    )
  }
}