import React, { Component } from 'react';
import {TableHeader} from './Header';

const buster = {
  src: 'http://fate-go.cirnopedia.org/icons/pattern/pattern_03.png',
  alt: 'Buster',
}

export class SDNP extends Component {
  render() {
    return(

<div className="nobleph">
  <TableHeader name="Noble Phantasm" />

  <div className="nobleContainer">

    <div className="nobleDivision">
      <img 
        src={buster.src}
        alt={buster.alt} />
    </div>

    <div className="nobleDivision">
      <div className="cellMargin">No Second Strike</div>
      <div className="cellMargin">(二度目のストライクはない)</div>
    </div>

    <div className="nobleDivision">
      <div className="cellMargin">Target</div>
      <div className="cellMargin">All Enemies</div>
    </div>

    <div className="nobleDivision">
      <div className="cellMargin">Rank</div>
      <div className="cellMargin">C-</div>
    </div>

    <div className="nobleDivision">
      <div className="cellMargin">lvl. 1</div>
      <div className="cellMargin">300%</div>
    </div>

    <div className="nobleDivision">
      <div className="cellMargin">lvl. 2</div>
      <div className="cellMargin">400%</div>
    </div>

    <div className="nobleDivision">
      <div className="cellMargin">lvl. 3</div>
      <div className="cellMargin">450%</div>
    </div>

    <div className="nobleDivision">
      <div className="cellMargin">lvl. 4</div>
      <div className="cellMargin">500%</div>
    </div>

    <div className="nobleDivision">
      <div className="cellMargin">lvl. 5</div>
      <div className="cellMargin">550%</div>
    </div>
  </div>
</div>
    )
  }
}