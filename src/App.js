import React, { Component } from 'react';
import './App.css';
import './SDSkills.css';
import {SDPic} from './SDPic';
import {SDIden} from './SDIden';
import {SDAbout} from './SDAbout';
import {SDCommands} from './SDCommands';
import {SDNP} from './SDNP';
import {SDSkills} from './SDSkills';
import {SDHeader} from './SDHeader';
// import {SDNav} from './SDNav'

class Test extends Component {
  render () {
    return (
<div className="strona">

  <div className="header">
      Header />
  </div>
<br />
    <div className="ramka">

        <div className="leftColumn">
            <SDPic />
        </div>

        <div className="rightColumn">
            <SDIden />
        <br />
            <SDAbout />
        <br />
            <SDCommands />
        </div>

    </div>

        <div className="footer">
            <SDNP />
        <br />
            <SDSkills />
        </div>
</div>
    )
  }
}

export default Test;