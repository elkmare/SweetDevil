import React, { Component } from 'react';
import '../App.css';
import '../Skills/Skills.css';
import '../NoblePhantasm/NoblePhantasm.css';
import '../Identity/Identity.css';
import '../CommandSpells/CommandSpells.css';
import '../About/About.css';
import {FaceServant} from '../FaceServant/FaceServant';
import {About} from '../About/About';
import {ServantName} from '../ServantName/ServantName';
import {IdentityRender} from '../Identity/IdentityRender';
import {CommandSpellsRender} from '../CommandSpells/CommandSpellsRender';
import {NoblePhantasmRender} from '../NoblePhantasm/NoblePhantasmRender';
import {SkillsRender} from '../Skills/SkillsRender';

export class ServantPage extends Component {
  render () {
    return (
<div className="strona">

  <div className="header">
     <ServantName values={this.props.servant.header} />
  </div><br />
    <div className="ramka">

        <div className="leftColumn">
            <FaceServant pictureUrls={this.props.servant.pictureUrls} />
        </div>

        <div className="rightColumn">
        <IdentityRender 
            pic1={this.props.servant.iden.pic1} 
            values={this.props.servant.iden.values} 
            pic2={this.props.servant.iden.pic2} /><br />

        <About 
            header={this.props.servant.about.header} 
            name={this.props.servant.about.name} /><br />

        <CommandSpellsRender 
            name={this.props.servant.commands.name}
            types={this.props.servant.commands.types} />
    </div>

</div>

        <div className="footer">
            <NoblePhantasmRender 
                name={this.props.servant.noblePhantasm.name} 
                type={this.props.servant.noblePhantasm.type} 
                values={this.props.servant.noblePhantasm.values} /><br />
            <SkillsRender 
                name={this.props.servant.skills.name}
                types={this.props.servant.skills.types}
            />
        </div>

        </div>
 ) }}