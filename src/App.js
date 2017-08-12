import React, { Component } from 'react';
import './App.css';
import './SDSkills.css';
import {SDPic} from './SDPic';
import {SDIden} from './SDIden';
import {SDAbout} from './SDAbout';
import {SDCommands} from './SDCommands';
import {SDSkills} from './SDSkills';
import {SDHeader} from './SDHeader';
import {SDNPContent} from "./SDNPContent";
import {TableHeader} from './Header';
// import {SDNav} from './SDNav'

const buster = {
  src: 'http://fate-go.cirnopedia.org/icons/pattern/pattern_03.png',
  alt: 'Buster',
}

const arts = {
  src: 'http://fate-go.cirnopedia.org/icons/pattern/pattern_02.png',
  alt: 'Arts',
}

const quick = {
  src: 'http://fate-go.cirnopedia.org/icons/pattern/pattern_01.png',
  alt: 'Quick',
}

class Test extends Component {
  render () {
    return (
<div className="strona">

  <div className="header">
     <SDHeader />
  </div>
<br />
    <div className="ramka">

        <div className="leftColumn">
            <SDPic />
        </div>

        <div className="rightColumn">
            <SDIden />
        <br />
            <SDAbout header="About" name="Her True Name is Altera (アルテラ,), better known in history as Attila the Hun (アッティラ・ザ・フン). She was the overlord who established a great empire in the 5th Century. She was a warrior and king of the Huns, a tribe descending from the Xiongnu (Hunni). Leading an army of cavalry, the conquests of this great hero covered a great part of the map, controlling a vast territory spanning from Western Asia to Russia, Eastern Europe and even Gaul. It can be said that she invited the eventual collapse of the Roman Empire. Throughout her life, Altera was always in the midst of battle. Due to the terrifying acts she commited in war, she was greatly feared in all European nations as the Scourge of God (神の懲罰) and the Whip of God (神の鞭). She is a pure King of Combat (戦闘王)."/>
        <br />
            <div className="commands">
                <TableHeader name="Command Cards" />
                <div className="commandsContent">
                    <SDCommands src={buster.src} />
                    <SDCommands src={buster.src} />
                    <SDCommands src={arts.src} />
                    <SDCommands src={arts.src} />
                    <SDCommands src={quick.src} />
                </div>
            </div>
            
        </div>

    </div>

        <div className="footer">

            <div className="nobleph">
                <TableHeader name="Noble Phantasm" />
                <div className="nobleContainer">
                    <SDNPContent src={buster.src} />
                    <SDNPContent name="No Second Strike" value="(二度目のストライクはない)"/>
                    <SDNPContent name="Target" value="All Enemies" />
                    <SDNPContent name="Rank" value="C-" />
                    <SDNPContent name="lvl. 1" value="300%" />
                    <SDNPContent name="lvl. 2" value="400%" />
                    <SDNPContent name="lvl. 3" value="450%" />
                    <SDNPContent name="lvl. 4" value="500%" />
                    <SDNPContent name="lvl. 5" value="550%" />
                </div>
            </div>
        <br />
            <SDSkills />
        </div>
</div>
    )
  }
}

export default Test;