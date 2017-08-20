import React, { Component } from 'react';
import {SDIdenContent} from './SDIdenContent';
import {SDIdenContentPic} from './SDIdenContentPic';
import {SDIdenContentPicTxt} from './SDIdenContentPicTxt';
import {SDIdenHeader} from './SDIdenHeader';

export class Iden extends Component {
  render () {
    return (
      <div className="iden">
          <SDIdenHeader name="Identity"/>
          <div className="IdenColumns">
              <SDIdenContentPic value={this.props.pic1} />
              {this.props.values.map((item) =>
                <SDIdenContent key={item.name} name={item.name} value={item.value}/>
              )}
              <SDIdenContentPicTxt values={this.props.pic2} />
          </div>
      </div>
                )
  }
}