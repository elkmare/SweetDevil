import React, { Component } from 'react';

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
        <div className="choose">Choose servant:</div>
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