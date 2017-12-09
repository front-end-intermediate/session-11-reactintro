import React, { Component } from 'react';
import Header from './components/Header';
import Pirate from './components/Pirate';
import PirateForm from './components/PirateForm';
import piratesFile from './data/sample-pirates-object'

import './assets/css/app.css';

class App extends Component {

  constructor() {
    super();
    this.addPirate = this.addPirate.bind(this);
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

  render() {
    return (
      <div className="App">
      <Header />
      <ul>
{
  Object.keys(this.state.pirates)
  .map( key => <Pirate key={key} /> )
}
</ul>
      
      <PirateForm addPirate={this.addPirate} />
      </div>
      );
  }
}

export default App;














