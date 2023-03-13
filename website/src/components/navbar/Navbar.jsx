import React, { useState, useEffect } from 'react';
import './navbar.css';
import { logo } from './imports.js'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  function setFixed() {
    if (window.scrollY > 200) {
      setSticky(true);
    }
    else {
      setSticky(false);
    }
  }
  //window.addEventListener('scroll', setFixed)
  return (
    <header>
      <nav className={sticky ? 'navbar fixed' : 'brasul__site-navigation_navbar'}>
        <div className='brasul__site-navigation_navbar'>
          <div className='brasul__site-navigation_navbar-links_logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='brasul__site-navigation_navbar-links'>
            <div className='brasul__site-navigation_navbar_links-container'>
              <p><a href="#home">Início</a></p>
              <p><a href="#sobre">Sobre</a></p>
              <p><a href="#orcamento">Orçamento</a></p>
              <p><a href="#contato">Contato</a></p>
            </div>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar