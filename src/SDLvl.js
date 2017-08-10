import React, { Component } from 'react';

export class SDLvl extends Component {
  render () {
    return (
      <div className="level">
        <div id="yellow">{this.props.levelName}</div>
        <div>{this.props.level}</div>
      </div>
    )
  }
}