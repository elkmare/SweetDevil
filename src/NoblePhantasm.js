import React, { Component } from 'react';
import {SDCommands} from './SDCommands';
import {TableHeader} from './Header';
import {SDNPContent} from "./SDNPContent";

export class NoblePhantasm extends Component {
  render () {
    return (

<div className="nobleph">
                <TableHeader name={this.props.name} />
                <div className="nobleContainer">
                    <SDCommands type={this.props.type} />
                    {this.props.values.map((item) =>
                    <SDNPContent key={item.name} name={item.name} value={item.value} />
                    )}
                </div>
</div>
    )
  }
}
