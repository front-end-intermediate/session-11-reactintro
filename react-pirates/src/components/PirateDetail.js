import React from 'react';
import '../assets/css/Header.css';
import {Link, withRouter} from 'react-router-dom';
// import Pirate from './Pirate';
import PropTypes from 'prop-types';

const PirateDetail = (props) => {
  return (
    <div className="pirate-detail">
      <p>{props.match.path}</p>
      <p>{props.location.pathname}</p>
      <p>{props.match.url}</p>

      <p>{props.name}</p>


      <Link to='/'>Home</Link>
    </div>
  );
};

PirateDetail.propTypes = {
  name: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
  vessel: PropTypes.string.isRequired
}

export default withRouter(PirateDetail);