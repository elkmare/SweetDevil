import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ListOfServants extends Component {
  render () {
    return (
      <div className="listContent">
        <h1>List of Servants</h1>
        <div className="list">
          <div className="icon">
            <div><Link to='/servants/gilgamesh'><img src='http://i.imgur.com/OfKW7ek.png'/></Link></div>
            <div><p>Gilgamesh</p></div>
            <div><p>Archer</p></div>
          </div>
          <div className="servantName">
           <div><Link to='/servants/artoria'><img src='http://i.imgur.com/qJEctao.png'/></Link></div>
           <div><p>Artoria</p></div>
            <div><p>Saber</p></div>
          </div>
          <div className="servantClass">
            <div><Link to='/servants/karna'><img src='http://i.imgur.com/ChuEBrE.png'/></Link></div>
            <div><p>Karna</p></div>
            <div><p>Saber</p></div>
          </div>
        </div>
      </div>
    )
  }
}