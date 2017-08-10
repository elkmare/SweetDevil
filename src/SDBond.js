import React, { Component } from 'react';
import {SDBondPic} from './SDBondPic';

export class SDBond extends Component {
  render () {
    return (
      <tr>
        <td id="yellow">Bond Lv.</td>
        <td colSpan="3">5 / 5</td>
        <td colSpan="2"><SDBondPic /></td>
      </tr>
    )
  }
}