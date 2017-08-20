import React, { Component } from 'react';
import './App.css';
import './SDSkills.css';
import './SDNP.css';
import './SDIden.css';
import './SDCommands.css';
import './SDAbout.css';
import {SDPic} from './SDPic';
import {SDAbout} from './SDAbout';
import {SDHeader} from './SDHeader';
import {Iden} from './Iden';
import {Command} from './Command';
import {NoblePhantasm} from './NoblePhantasm';
import {Skills} from './Skills';

class App extends Component {
  render () {
    return (
<div className="strona">

  <div className="header">
     <SDHeader values={this.props.servant.header} />
  </div><br />
    <div className="ramka">

        <div className="leftColumn">
            <SDPic id={this.props.servant.picture} />
        </div>

        <div className="rightColumn">
            <Iden 
                pic1={this.props.servant.iden.pic1} 
                values={this.props.servant.iden.values} 
                pic2={this.props.servant.iden.pic2} /><br />

            <SDAbout 
                header={this.props.servant.about.header} 
                name={this.props.servant.about.name} /><br />

            <Command 
                name={this.props.servant.commands.name}
                types={this.props.servant.commands.types} />
        </div>

    </div>

    <div className="footer">
        <NoblePhantasm 
            name={this.props.servant.noblePhantasm.name} 
            type={this.props.servant.noblePhantasm.type} 
            values={this.props.servant.noblePhantasm.values} /><br />
        <Skills 
            name={this.props.servant.skills.name}
            types={this.props.servant.skills.types}
        />
    </div>

</div>
    )
  }
}

export default App;