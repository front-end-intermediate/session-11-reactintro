import React, { Component } from 'react';
import AddPirateForm from './AddPirateForm';

class PirateForm extends React.Component {
  render(){
    return (
      <div>
      <h3>Pirate Form Component</h3>
      <button onClick={this.props.loadSamples}>Load Sample Pirates</button>

      <button onClick={() => this.props.removePirate('pirate1')}>RemovePirate</button>
      
      <AddPirateForm addPirate={this.props.addPirate} />
      </div>
      )
  }
}

export default PirateForm;