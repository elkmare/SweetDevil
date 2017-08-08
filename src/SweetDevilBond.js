import React, { Component } from 'react';
import {SweetDevilBondPic} from './SweetDevilBondPic';

export class SweetDevilBond extends Component {
  render () {
    return (
      <tr>
        <td id="yellow">Bond Lv.</td>
        <td colSpan="3">5 / 5</td>
        <td colSpan="2"><SweetDevilBondPic /></td>
      </tr>
    )
  }
}