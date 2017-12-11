import React, { Component } from 'react';
import Header from './components/Header';
import Pirate from './components/Pirate';
import PirateForm from './components/PirateForm';
import piratesFile from './data/sample-pirates-object'

import './assets/css/app.css';

class App extends Component {

  constructor() {
    super();
    this.addPirate = this.addPirate.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.removePirate = this.removePirate.bind(this)
    this.state = {
      pirates: {}
    }
  }

  addPirate(pirate){
    //update state
    const pirates = {...this.state.pirates}
    //add new pirate
    const timestamp = Date.now()
    pirates[`pirate-${timestamp}`] = pirate
    //set state
    this.setState({ pirates: pirates })
  }

  removePirate(key){
    const pirates = {...this.state.pirates}
    delete pirates[key]
    this.setState({pirates})
  }

  render() {
    return (
      <div className="App">
      <Header />

      <ul>
      {
        Object.keys(this.state.pirates)
        .map( key => <Pirate key={key} 
          index={key} 
          details={this.state.pirates[key]} 
          removePirate={this.removePirate}
          /> )
      }
      </ul>
      <button onClick={this.loadSamples}>Load Sample Pirates</button>
      <PirateForm 
        addPirate={this.addPirate} 
        removePirate={this.removePirate} 
        loadSamples={this.loadSamples} />
      </div>
      );
  }

  loadSamples(){
    this.setState({
      pirates: piratesFile
    })
  }
}

export default App;














