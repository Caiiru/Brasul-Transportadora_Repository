import React from 'react'
import './header.css'

import {header1, header2} from './imports.js'
const Header = () => {
  return (
    <div>Header
      <img src={header1} className='Image-Header' alt='header-truck1' />
      <img src={header2} className='Image-Header' alt='header-truck2' />
      <button type='button'>Solicitar Orçamento</button>
    </div>
  )
}

export default Header