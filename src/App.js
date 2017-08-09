import React, { Component } from 'react';
// import './App.css';
import './AppTest2.css';
import {SweetDevilPic} from './SweetDevilPic';
import {SweetDevilIden} from './SweetDevilIden';
import {SweetDevilAbout} from './SweetDevilAbout';

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

        <div className="kolumnaPrawa">
            <SweetDevilIden />
        <br />
            <SweetDevilAbout />
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
                        <th colSpan="9">Noble Phantasm</th>
                    </tr>
                    <tr>
                        <td rowSpan="2"><img src="http://fate-go.cirnopedia.org/icons/pattern/pattern_03.png" /></td>
                        <td rowSpan="2" id ="kolor">No Second Strike <br />(二度目のストライクはない)</td>
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
                        <th colSpan="6">Skills</th>
                    </tr>
                    <tr>
                        <td colSpan="3" id="kolor">Aktive Skills</td>
                        <td colSpan="3" id="kolor">Passive Skills</td>
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
