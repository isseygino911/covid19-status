import React, { Component } from 'react';
import Detail from './Detail';
import axios from 'axios';

export default class Header extends Component {
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
        <tr>
          <td>
            <Detail name={state.state} />
          </td>
          <td>
            <Detail
              name={state.totalTestResults ? state.totalTestResults : 0}
            />
          </td>
          <td>
            <Detail name={state.positive ? state.positive : 0} />
          </td>
          <td>
            <Detail name={state.recovered ? state.recovered : 0} />
          </td>
          <td>
            <Detail name={state.hospitalized ? state.hospitalized : 0} />
          </td>
          <td>
            <Detail name={state.death ? state.death : 0} />
          </td>
          <td>
            <Detail name={state.lastUpdateEt ? state.lastUpdateEt : 0} />
          </td>
        </tr>
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
        <tbody>{info}</tbody>
      </table>
    );
  }
}
