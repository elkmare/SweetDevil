import React, { Component } from 'react';
import {CommandSpellsContent} from './CommandSpellsContent';
import {TableHeader} from '../Header';

export class CommandSpellsRender extends Component {
  render () {
    return (
            <div className="commands">
                <TableHeader name={this.props.name} />
                <div className="commandsContent">
                  {this.props.types.map((item, index) =>
                  <CommandSpellsContent key={index} type={item} />
                  )}
                </div>
            </div>
    )
  }
}