import React, { Component } from 'react';
import { IdentityStats } from './IdentityStats';
import { IdentityAvatar } from './IdentityAvatar';
import { IdentityBond } from './IdentityBond';
import { TableHeader } from '../Header';

export class IdentityRender extends Component {
  render () {
    return (
      <div className="iden">
          <TableHeader name="Identity"/>
          <div className="IdenColumns">
              <IdentityAvatar value={this.props.pic1} />
              {this.props.values.map((item) =>
                <IdentityStats key={item.name} name={item.name} value={item.value}/>
              )}
              <IdentityBond values={this.props.pic2} />
          </div>
      </div>
                )
  }
}