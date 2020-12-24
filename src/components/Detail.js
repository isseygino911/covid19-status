import React, { Component } from 'react';
import '../App.css';

export default class Detail extends Component {
  render() {
    const {name,totalTestResults,positive,recovered,hospitalized,death,lastUpdateEt} = this.props
    return (
        <tr>
            <td>{name}</td>
            <td>{totalTestResults}</td>
            <td>{positive}</td>
            <td>{recovered}</td>
            <td>{hospitalized}</td>
            <td>{death}</td>
            <td>{lastUpdateEt}</td>
        </tr>
      
    );
  }
}
