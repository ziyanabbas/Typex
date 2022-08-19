import React from 'react'
import logo from '../../assets/logo.png';
import "./Navbar.css";
const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='nav-left'>
        {/* <img className='flash-logo' src={logo} alt="typex logo" /> */}
        <p className='flash-logo-text'>Typex</p>
      </div>
      <div className='nav-right'>
        <a target="__blank"
          className='nav-aam-link'
          href="http://www.ziyanabbas.com/"
          rel="noreferrer">Muhammad Ziyan Abbas</a>
      </div>
    </div>
  )
}

export default Nav
