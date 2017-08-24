import React, { Component } from 'react';
import {Serv} from './Serv';
import {Switch, Route} from 'react-router-dom';
import {Strona} from './Strona';
import {ListOfServants} from './ListofServants';


export class PageContent extends Component {
  render () {
    return (
        <Switch>
            <Route exact path='/' component={Strona}/>
            <Route path='/servants/gilgamesh' component={() => <Serv servant={this.props.servant}/>} />
            <Route path='/servants' component={ListOfServants} />
        </Switch>
    )
  }
}