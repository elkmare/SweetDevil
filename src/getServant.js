import React, { Component } from 'react';
import * as servants from './servants';
import { ServantPage } from './PageServant/ServantPage';

export class GetServant extends Component  {
  getServant () {
    const servant = servants[this.props.match.params.servant];
    return servant;
  }
  render () {
    return (
      <ServantPage servant={this.getServant()} />
    )
  }
}