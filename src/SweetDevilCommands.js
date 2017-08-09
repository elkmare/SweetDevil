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

export class SweetDevilCommands extends Component {
  render() {
    return(
      <table className="commands">
        <tr>
          <th>Command Cards</th>
        </tr>
        <tr>
          <td>
            <img 
              src={quick.src}
              art={quick.alt} />
            <img 
              src={arts.src}
              alt={arts.alt} />
            <img 
              src={arts.src}
              alt={arts.alt} />
            <img 
              src={buster.src}
              alt={buster.alt} />
            <img 
              src={buster.src}
              alt={buster.alt} />
          </td>
        </tr>
      </table>
    )
  }
}