import React, { Component } from 'react';

export class SDAbout extends Component {
  render() {
    return(
      <div className="about">
        <div className="tableHeader">{this.props.header}</div>
          <div className="aboutContent">
            <div className="cellMargin">
              <div>{this.props.name}</div>
            </div>
          </div>
      </div>  
    )
  }
}