import React, { Component } from 'react';
import { CommandSpellsContent } from '../CommandSpells/CommandSpellsContent';
import { TableHeader } from '../Header';
import { NoblePhantasmContent } from './NoblePhantasmContent';

export class NoblePhantasmRender extends Component {
  render () {
    return (

<div className="nobleph">
                <TableHeader name={this.props.name} />
                <div className="nobleContainer">
                    <CommandSpellsContent type={this.props.type} />
                    {this.props.values.map((item) =>
                    <NoblePhantasmContent key={item.name} name={item.name} value={item.value} />
                    )}
                </div>
</div>
    )
  }
}
