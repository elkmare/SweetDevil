import React, { Component } from 'react';
import {PageContent} from './PageContent';
import {Menu} from './Menu';
import * as servants from './servants';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentServant: 'Gilgamesh' };
    this.changeName = this.changeName.bind(this);
  }
  
  changeName(newName) {
    this.setState({
      currentServant: newName
    });
  }

  getServant () {
    const servant = servants[this.state.currentServant];
    return servant;
  }

  render() {
    return (
      <div className="fullPage">
        <Menu onChange={this.changeName} />
        <PageContent servant={this.getServant()} />
      </div>
    )
  }
}