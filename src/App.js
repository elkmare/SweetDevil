import React, { Component } from 'react';
import {PageContent} from './PageContent';
import {Menu} from './Menu';
import {AlteraSweetDevil} from './servants';
import {Gilgamesh} from './servants';

export default class App extends Component {
  render() {
    return (
      <div className='fullPage'>
      <Menu />
      <PageContent servant={Gilgamesh} />
      </div>
    )
  }
}