import React from 'react';
import AddPirateForm from './AddPirateForm';

class PirateForm extends React.Component {
  render(){
    return (
      <div>
      {Object.keys(this.props.pirates).map(this.renderPirates)}
      <h3>Pirate Form Component</h3>
        <AddPirateForm addPirate={this.props.addPirate} />
        <button onClick={this.props.loadSamples}>Load Sample Pirates</button>  
      </div>
      )
  }

  constructor() {
    super();
    this.renderPirates = this.renderPirates.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  renderPirates(key){
    const pirate = this.props.pirates[key]
    return (
    <div key={key}>
      <p>{key}</p>
      <input value={pirate.name} onChange={(e) => this.handleChange(e, key)} type="text" name="name" placeholder="Pirate name" />
      <input value={pirate.weapon} onChange={(e) => this.handleChange(e, key)} type="text" name="weapon" placeholder="Pirate weapon" />
      <input value={pirate.vessel} onChange={(e) => this.handleChange(e, key)} type="text" name="vessel" placeholder="Pirate vessel" />

    </div>
    )
  }

  handleChange(e, key){
    const pirate = this.props.pirates[key]
    const updatedPirate = {
      ...pirate,
      [e.target.name]: e.target.value
    }
    // console.log(updatedPirate)
    this.props.updatePirate(key, updatedPirate)
  }

} 

export default PirateForm;