import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PageContent } from './PageContent';
import { NoblePhantasm } from './NoblePhantasm';
import { Iden } from './Iden';

export class Main extends Component {
  render () {
    return 
    <Switch>
      <Route exact path='/' component={PageContent}/>
    </Switch>
  }
}
