import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import './AppTest2.css';

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

class Test extends Component {
  render () {
    return (
<div className="strona">

  <div className="header">
    <h1 id="name">Altera Sweet Devil ★★★★★</h1>
    <h2 id="name2">アルテラ•スウィート•デビル</h2>
  </div>

    <div className="ramka">

        <div className="kolumnaLewa">
          <img 
            src={sweetDevilPic.src}
            alt={sweetDevilPic.alt}
            width={sweetDevilPic.width} />
        </div>

        <div className="kolumnaPrawa">
        <table className="iden">
            <tr>
                <th id="head1" colspan="7">Identity</th>
            </tr>
            <tr>
                <td id="head2" rowspan="4"><img src="http://figuya.com/uploads/product/profile_picture/8731/profile_Saber_-_Attila__Altera__-_Sweet_Devil_-_Union_Creative_vorschau.jpg" /></td>
            </tr>
            <tr>
                <td id="zolty">Lv.</td>
                <td colspan="4"> 90 / 90</td>
            </tr>
            <tr>
                 <td id="kolor">ATK</td>
                 <td>17.236</td>
                 <td id="kolor">HP</td>
                 <td>15.511</td>
                 <td id="kolor">COST</td>
                 <td>12</td>
            </tr>
            <tr>
                <td id="zolty">Bond Lv.</td>
                <td colspan="3">5 / 5</td>
                <td colspan="2"><img src="http://i.imgur.com/wT0n2qj.png" /></td>
            </tr>
        </table>
        <br />
        <table className="iden">
        <tbody>
            <tr>
                <th>About</th>
            </tr> 
            <tr>
                <td id="about">Her True Name is Altera (アルテラ,), better known in history as Attila the Hun (アッティラ・ザ・フン). She was the overlord who established a great empire in the 5th Century. She was a warrior and king of the Huns, a tribe descending from the Xiongnu (Hunni). Leading an army of cavalry, the conquests of this great hero covered a great part of the map, controlling a vast territory spanning from Western Asia to Russia, Eastern Europe and even Gaul. It can be said that she invited the eventual collapse of the Roman Empire. Throughout her life, Altera was always in the midst of battle. Due to the terrifying acts she commited in war, she was greatly feared in all European nations as the Scourge of God (神の懲罰) and the Whip of God (神の鞭). She is a pure King of Combat (戦闘王).</td>
            </tr>
        </tbody>
        </table>
    <br />
            <table className="commands">
                <tbody>
                    <tr>
                        <th>Command Cards</th>
                    </tr>
                    <tr>
                    <td><img src="http://fate-go.cirnopedia.org/icons/pattern/pattern_01.png" />
                    <img src="http://fate-go.cirnopedia.org/icons/pattern/pattern_02.png" />
                    <img src="http://fate-go.cirnopedia.org/icons/pattern/pattern_02.png" />
                    <img src="http://fate-go.cirnopedia.org/icons/pattern/pattern_03.png" />
                    <img src="http://fate-go.cirnopedia.org/icons/pattern/pattern_03.png" /></td>
                    </tr>
                </tbody> 
            </table>

        </div>

    </div>

        <div className="footer">
            <table className="nobleph">
                <tbody>
                    <tr>
                        <th colspan="9">Noble Phantasm</th>
                    </tr>
                    <tr>
                        <td rowspan="2"><img src="http://fate-go.cirnopedia.org/icons/pattern/pattern_03.png" /></td>
                        <td rowspan="2" id ="kolor">No Second Strike <br />(二度目のストライクはない)</td>
                        <td>Target</td>
                        <td>Rank</td>
                        <td>lvl. 1</td>
                        <td>lvl. 2</td>
                        <td>lvl. 3</td>
                        <td>lvl. 4</td>
                        <td>lvl. 5</td>
                    </tr>
                    <tr>
                        <td>All enemies</td>
                        <td>C-</td>
                        <td>300%</td>
                        <td>400%</td>
                        <td>450%</td>
                        <td>500%</td>
                        <td>550%</td>
                    </tr>
                </tbody>
            </table>
<br />
            <table className="skills">
                <tbody>
                    <tr>
                        <th colspan="6">Skills</th>
                    </tr>
                    <tr>
                        <td colspan="3" id="kolor">Aktive Skills</td>
                        <td colspan="3" id="kolor">Passive Skills</td>
                    </tr>
                    <tr>
                        <td>Marksmanship A+</td>
                        <td>Presence Detection D+</td>
                        <td>Knight Tactics C+</td>
                        <td>Presence Concealment C-</td>
                        <td>Experience Point Bonus B-</td>
                        <td>Cosmo Reactor A+</td>
                    </tr>
                    <tr>
                        <td><img src="http://fate-go.cirnopedia.org/icons/skill/skill_017.png" /></td>
                        <td><img src="http://fate-go.cirnopedia.org/icons/skill/skill_001.png" /></td>
                        <td><img src="http://fate-go.cirnopedia.org/icons/skill/skill_005.png" /></td>
                        <td><img src="http://fate-go.cirnopedia.org/icons/skill/skill_028.png" /></td>
                        <td><img src="http://fate-go.cirnopedia.org/icons/skill/skill_027.png" /></td>
                        <td><img src="http://fate-go.cirnopedia.org/icons/skill/skill_033.png" /></td>
                    </tr>
                </tbody>
            </table>


        </div>

</div>
    )
  }
}

export default Test;
