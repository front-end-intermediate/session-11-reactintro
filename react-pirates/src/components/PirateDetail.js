import React from 'react';
import '../assets/css/Header.css';
import {
  Link
  // , withRouter
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import base from '../base';
// import Pirate from './Pirate';

class PirateDetail extends React.Component {
  
  // pirateId = this.props.match.params.pid;
  
  // temp = Object.keys(this.state.pirates)
  // .find(pirate => pirate === pirateId)
  // temp2 = {...this.state.pirates} 
  // console.log(temp2)
  
  constructor() {
    super();
    // this.pirateId = this.props.match.params.pid;
    this.state = {
      pirates: {},
      pirate: {}
    }
  }
  
  render() {
    
    const pirateId = this.props.match.params.pid;
    
    // var temp = Object.keys(this.state.pirates).find(pirate => pirate === pirateId)
    var temp2 = { ...this.state.pirates }
    var myPirate = temp2[pirateId]
    
    if (myPirate) {
      this.pirateName = myPirate.name;
      this.pirateDescription = myPirate.desc;
    }

    return (
      <div className="pirate-detail">
      <p>{this.props.match.path}</p>
      <p>{this.props.location.pathname}</p>
      <p>{this.props.match.params.pid}</p>
      
      <h3>{this.pirateName}</h3>
      <p>{this.pirateDescription}</p>  
      
      {/* <p>Hullo 
      {Object.keys(this.state.pirates)
        .find(key => <Pirate key={key}
          index={key} 
          details={this.state.pirates[key]} />)
        }
        </p> */}
        
        <Link to='/'>Home</Link>
        </div>
      )
    }
    
    componentWillMount(){
      this.ref = base.syncState(`tom-jones-pirates/pirates`, {
        context: this,
        state: 'pirates'
      })
    }
    
    componentWillUmount(){
      base.removeBinding(this.ref)
    } 
    
  }
  
  // PirateDetail.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   weapon: PropTypes.string.isRequired,
  //   vessel: PropTypes.string.isRequired
  // }
  
  export default PirateDetail;