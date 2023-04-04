import React, { useState, useEffect } from 'react';
import './navbar.css';
import { logo } from './imports.js'
import { FaBars } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='brassul_header'>
      <nav className={'brasul__site-navigation_navbar'}>
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
          <div className='menu'>
            {toggleMenu
              ? <RiCloseLine color='#fff' size={30} onClick={() => setToggleMenu(false)} />
              : <FaBars color='#fff' size={40} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
              <div className='brasul_navbar-menu_container scale-up-center'>
                <div className='brasul_navbar-menu_container-links'>
                  <p><a href="#home">Início</a></p>
                  <p><a href="#sobre">Sobre</a></p>
                  <p><a href="#orcamento">Orçamento</a></p>
                  <p><a href="#contato">Contato</a></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header >
  )
}

export default Navbar