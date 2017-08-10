import React, { Component } from 'react';
import {SDAv} from './SDAv';
import {SDAHC} from './SDAHC';
import {SDBond} from './SDBond';
import {SDLvl} from './SDLvl';
import {SDIdenHeader} from './SDIdenHeader'

export class SDIden extends Component {
  render () {
    return (
      <table className="iden">
          <SDIdenHeader />
          <SDAv />
          <SDLvl />
          <SDAHC />
          <SDBond />
      </table>

    )
  }
}