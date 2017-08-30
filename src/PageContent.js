import React, { Component } from 'react';
import {ServantPage} from './PageServant/ServantPage';
import {Switch, Route} from 'react-router-dom';
import {Strona} from './PageMainPage/Strona';
import {ListOfServants} from './PageListOfServants/ListofServants';
import * as servants from './servants';
import {GetServant} from './getServant';

export class PageContent extends Component {
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

  render () {
    return (
        <Switch>
            <Route exact path='/' component={Strona}/>
            <Route path='/servants/:servant' component={GetServant} />
        </Switch>
    )
  }
}