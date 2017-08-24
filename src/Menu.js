import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const name = e.target.value;
    this.props.onChange(name);
  }

  render () {
    return (
      <div clasName="menuContent">
          <div className="logo">
            <img src="http://i.imgur.com/8hRnAzi.png" />
          </div>
          <div className="navigation">
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/servants'>Servants</Link></li>
                <li><Link to='/craft-essences'>Craft Essences</Link></li>
              </ul>
          </div>
          <div className="select">
            <select onChange={this.handleChange}>
              <option value="Gilgamesh">Gilgamesh</option>
              <option value="AlteraSweetDevil">Altera Sweet Devil</option>
            </select>
          </div>
      </div>
    )
  }
}