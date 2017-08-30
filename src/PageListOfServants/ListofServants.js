import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AllServants } from './ServantDetails';
import {Servant} from './Servant';

export class ListOfServants extends Component {
  render () {
    return (
      <div className="list">
        <h1>Content of Servants</h1>
        <div className="listContent">
          {AllServants.map((item) => <Servant key={item.name} src={item.src} name={item.name} class={item.class} range={item.range}/> )}
        </div>
      </div>
    )
  }
}