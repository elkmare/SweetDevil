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

export class CommandSpellsContent extends Component {

  render() {
    let url;
    if(this.props.type=="buster") {
      url=buster.src;
    } else if(this.props.type=="arts") {
      url=arts.src;
    } else {
      url=quick.src;
    }
    return (
      <div className="cellMargin">
        <div><img src={url} /></div>
      </div>
    )
  }
}