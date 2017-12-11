import React, { Component } from 'react';
import Header from './components/Header';
import PirateForm from './components/PirateForm';
import Pirate from './components/Pirate';
import piratesFile from './data/sample-pirates-object';
import './App.css';

class App extends Component {

  constructor() {
    super();
      this.addPirate = this.addPirate.bind(this)
        this.loadSamples = this.loadSamples.bind(this)
          this.state = {
            pirates: {}
          }
        }

        loadSamples(){
          this.setState({
            pirates: piratesFile
          })
        }


        addPirate(pirate){
          const pirates = {...this.state.pirates}
          const timestamp = Date.now()
          pirates[`pirate-${timestamp}`] = pirate
          this.setState({ pirates: pirates })
        }

        render() {
          return (
            <div className="App">
            <Header />
            <button onClick={this.loadSamples}>Load Sample Pirates</button>
            {
              Object
              .keys(this.state.pirates)
              .map( key => <Pirate key={key} details={this.state.pirates[key]} /> )
            }
            <PirateForm addPirate={this.addPirate} loadSamples={this.loadSamples} />
            </div>
            );
          }
        }

        export default App;
