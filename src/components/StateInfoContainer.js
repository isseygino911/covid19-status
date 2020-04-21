import React, { Component } from 'react';
import Detail from './Detail';
import axios from 'axios';

export default class StateInfoContainer extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://covidtracking.com/api/states`)
      .then((res) => {
        this.setState({ results: res.data });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  }
  render() {
    const info = this.state.results.map((state) => {
      return (
        <tbody>
          <Detail
            name={state.state}
            totalTestResults={
              state.totalTestResults ? state.totalTestResults : 0
            }
            positive={state.positive ? state.positive : 0}
            recovered={state.recovered ? state.recovered : 0}
            hospitalized={state.hospitalized ? state.hospitalized : 0}
            death={state.death ? state.death : 0}
            lastUpdateEt={state.lastUpdateEt ? state.lastUpdateEt : 0}
          />
        </tbody>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>States</th>
            <th>Total Tested</th>
            <th>Positive</th>
            <th>Recovered</th>
            <th>Hospitalized</th>
            <th>Death</th>
            <th>Last Update</th>
          </tr>
        </thead>
        {info}
      </table>
    );
  }
}
