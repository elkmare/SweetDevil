import React, { Component } from 'react';
import {SDCommands} from './SDCommands';
import {TableHeader} from './Header';

export class Command extends Component {
  render () {
    return (
            <div className="commands">
                <TableHeader name={this.props.name} />
                <div className="commandsContent">
                  {this.props.types.map((item, index) =>
                  <SDCommands key={index} type={item} />
                  )}
                </div>
            </div>
    )
  }
}