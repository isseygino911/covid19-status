import React, { Component } from 'react';
import Detail from './Detail';
import axios from 'axios';
import StateNav from './StateNav';

export default class StateInfoContainer extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      displayContent:[]
    };

    this.selectedState = this.selectedState.bind(this)
  }
  componentDidMount() {
    axios
      .get(`https://api.covidtracking.com/v1/states/current.json`)
      .then((res) => {
        this.setState({ results: res.data });
      })
      .catch((err) => console.log(err));
  }

  selectedState = function(selected) { 
    const filtered = this.state.results.filter(function(detail){
      if(detail.state === selected){
        return detail
      }else if(selected === 'All'){
        return detail
      }else{
        return null
      }
    })
    this.setState({displayContent:filtered})    
  }

  
  render() {

    const eachState = this.state.results.map((state) => {
      return (
        <StateNav key={state.state} eachState={state.state} selectedState = {this.selectedState}/>
      )
    })
 
    return (
      <div >
        <div className='nav'>
          {eachState}
          <button onClick={()=>this.selectedState('All')}>All</button>

        </div> 
        <table>
          <tbody>
            <tr>
              <th>States</th>
              <th>Total Tested</th>
              <th>Positive</th>
              <th>Recovered</th>
              <th>Hospitalized</th>
              <th>Death</th>
              <th>Last Update</th>
            </tr>
            {this.state.displayContent.map(content => 
                <Detail  
                key={content.state}
                name={content.state}
                totalTestResults={content.totalTestResults ? content.totalTestResults : 0}
                positive={content.positive ? content.positive : 0}
                recovered={content.recovered ? content.recovered : 0}
                hospitalized={content.hospitalized ? content.hospitalized : 0}
                death={content.death ? content.death : 0}
                lastUpdateEt={content.lastUpdateEt ? content.lastUpdateEt : 0}
                />)
              }
              </tbody>
          </table>
      </div>
    );
  }
}
