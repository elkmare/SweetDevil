import React, { Component } from 'react';
// import './App.css';
import './AppTest2.css';
import {SweetDevilPic} from './SweetDevilPic';
import {SweetDevilIden} from './SweetDevilIden';
import {SweetDevilAbout} from './SweetDevilAbout';
import {SweetDevilCommands} from './SweetDevilCommands';
import {SweetDevilNP} from './SweetDevilNP';
import {SweetDevilSkills} from './SweetDevilSkills';

class Test extends Component {
  render () {
    return (
<div className="strona">

  <div className="header">
    <h1 id="name">Altera Sweet Devil ★★★★★</h1>
    <h2 id="name2">アルテラ•スウィート•デビル</h2>
  </div>

    <div className="ramka">

        <div className="leftColumn">
            <SweetDevilPic />
        </div>

        <div className="rightColimn">
            <SweetDevilIden />
        <br />
            <SweetDevilAbout />
        <br />
            <SweetDevilCommands />
        </div>

    </div>

        <div className="footer">
            <SweetDevilNP />
        <br />
            <SweetDevilSkills />
        </div>
</div>
    )
  }
}

export default Test;
