import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ListOfServants extends Component {

  render () {
    return (
      <div className="listContent">
        <h1>List of Servants</h1>
        <div className="divTable">
          <div className="divTableBody">
          <div className="divTableRow">
          <div className="divTableCell">Icon</div>
          <div className="divTableCell">Name</div>
          <div className="divTableCell">Range</div>
          <div className="divTableCell">Star</div>
          </div>
          <div className="divTableRow">
          <div className="divTableCell"><img src='http://i.imgur.com/OfKW7ek.png'/></div>
          <div className="divTableCell"><Link to='/servants/:servant'>Gilgamesh</Link></div>
          <div className="divTableCell">Archer</div>
          <div className="divTableCell">SSR</div>
          </div>
          </div>
          </div>
        </div>
    )
  }
}