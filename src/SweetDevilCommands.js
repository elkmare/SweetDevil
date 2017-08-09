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
  constructor(props){
    super(props)
    this.state = {hidden: true};
    this.handleClick=this.handleClick.bind(this);
  }
  
  handleClick () {
    const newState = this.state.hidden == true ? true : false;
    this.setState({hidden: newState});
  }
  
  render() {
    if(this.state.hidden == true) {
    return(
      <table className="commands">
        <tr>
          <th>Command Cards</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    )
  }
    else {
      return (
      <table className="commands">
        <tr>
          <th>Command Cards</th>
        </tr>
        <tr>
          <td>
            <img 
              src={quick.src}
              art={quick.alt} 
              onClick={this.hidden} />
            <img 
              src={arts.src}
              alt={arts.alt} 
              onClick={this.hidden} />
            <img 
              src={arts.src}
              alt={arts.alt} 
              onClick={this.hidden} />
            <img 
              src={buster.src}
              alt={buster.alt}
              onClick={this.hidden} />
            <img 
              src={buster.src}
              alt={buster.alt}
              onClick={this.hidden} />
          </td>
        </tr>
      </table>
      )
    }
    }
  }