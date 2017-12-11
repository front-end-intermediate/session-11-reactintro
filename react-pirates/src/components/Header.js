import React, { Component } from 'react';
// import logo from '../assets/img/anchor.svg';
import '../assets/css/Header.css';

class Header extends React.Component {
  render(){
    return (
      <div className="header">
      	<h3>Pirate Header Component</h3>
				{/* <img src={logo} className="logo" alt="logo" /> */}
      </div>)
    }
  }

export default Header;