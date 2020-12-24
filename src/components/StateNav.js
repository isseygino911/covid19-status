import React, { Component } from 'react';

export default class StateNav extends Component {  
  render() {
    return (
      <div className='stateName' onClick={()=>this.props.selectedState(this.props.eachState)}>
       <button> {this.props.eachState}</button>
      </div>
      
    );
  }
}
