import React, { Component } from 'react';

const buster = {
  src: 'http://fate-go.cirnopedia.org/icons/pattern/pattern_03.png',
  alt: 'Buster',
}

const arts = {
  src: 'http://fate-go.cirnopedia.org/icons/pattern/pattern_02.png',
  alt: 'Arts',
}

const quick = {
  src: 'http://fate-go.cirnopedia.org/icons/pattern/pattern_01.png',
  alt: 'Quick',
}

export class SDCommands extends Component {
  render() {
      return (
            <div className="cellMargin">
              <div><img src={this.props.src} /></div>
            </div>
      )
    }
    }