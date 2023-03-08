import React from 'react';
import './navbar.css';
import {logo} from './imports.js'

const Navbar = () => {
  return (
    <div className='brasul__site-navigation_navbar'>
      <img src={logo} alt='logo'/>
      <button type='button'>Inicio</button>
      <button type='button'>Sobre</button>
      <button type='button'>Orçamentos</button>
      <button type='button'>Contato</button>

    </div>
  )
}

export default Navbar