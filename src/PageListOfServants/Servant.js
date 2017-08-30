import React, { Component } from 'react';
import { ListOfServants } from './ListofServants';
import { Link } from 'react-router-dom';

export class Servant extends Component {
  render() {
    return(
      <div className="servantAvatar">
        <Link to={`servants/${this.props.name}`}><img src={this.props.src} /></Link>
      </div>

    )
  }
}