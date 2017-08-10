import React, { Component } from 'react';

export class Skill extends Component {
  render() {
    return (
        <div>
          <div className="cellMargin">{this.props.name} {this.props.rank}</div>
          <div className="cellMargin">
            <img 
              src={this.props.src}
              alt={this.props.name} />
          </div>
        </div>
    )
  }
}