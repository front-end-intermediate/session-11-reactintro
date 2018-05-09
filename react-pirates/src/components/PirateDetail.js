import React from 'react';
import '../assets/css/Header.css';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import base from '../base';
import Pirate from './Pirate';

class PirateDetail extends React.Component {

  constructor() {
    super();
    this.state = {
      pirates: {}
    }
  }

  render() {
    
    var pirateId = this.props.match.params.pid;
    
    return (
      <div className="pirate-detail">
      <p>{this.props.match.path}</p>
      <p>{this.props.location.pathname}</p>
      <p>{this.props.match.params.pid}</p>
      
      <p>{"hup " + this.props.name}</p>

      <p>Hullo 
      {Object.keys(this.state.pirates)
    .find(key => <Pirate key={key}
      index={key} 
      details={this.state.pirates[key]}
      removePirate={this.removePirate} />)
}
      </p>
      
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

PirateDetail.propTypes = {
  name: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
  vessel: PropTypes.string.isRequired
}

export default withRouter(PirateDetail);