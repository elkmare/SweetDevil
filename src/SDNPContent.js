import React, { Component } from 'react';
import {TableHeader} from './Header';

export class SDNPContent extends Component {
  render() {
    return(
          <div className="nobleDivision">

            <div className="cellMargin">
              {this.props.name} 
              <img src={this.props.src} />
            </div>
            <div className="cellMargin">{this.props.value}</div>

            </div>
          )
  }
}