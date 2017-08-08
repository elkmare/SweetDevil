import React, { Component } from 'react';
import {SweetDevilAv} from './SweetDevilAv';
import {SweetDevilAHC} from './SweetDevilAHC';
import {SweetDevilBond} from './SweetDevilBond';
import {SweetDevilLvl} from './SweetDevilLvl';
import {SweetDevilIdenHeader} from './SweetDevilIdenHeader'

export class SweetDevilIden extends Component {
  render () {
    return (
      <table className="iden">
          <SweetDevilIdenHeader />
          <SweetDevilAv />
          <SweetDevilLvl />
          <SweetDevilAHC />
          <SweetDevilBond />
      </table>

    )
  }
}