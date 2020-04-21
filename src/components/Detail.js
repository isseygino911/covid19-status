import React, { Component } from 'react';
import '../App.css';

export default class Detail extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.totalTestResults}</td>
        <td>{this.props.positive}</td>
        <td>{this.props.recovered}</td>
        <td>{this.props.hospitalized}</td>
        <td>{this.props.death}</td>
        <td>{this.props.lastUpdateEt}</td>
      </tr>
    );
  }
}
