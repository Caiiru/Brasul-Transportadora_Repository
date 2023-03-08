import React from 'react'
import './middle.css'
import { Budget } from './../../components'
const Middle = () => {
  return (
    <div className='brasul__site-middle'>
      Middle
      <Budget />
      <div className='brasul__site-middle_content'>
        <h2>DO SUL PARA TODO BRASIL</h2>
        <ul>
          <li>CARGAS FRACIONADAS: CURITIBA E REGIÃO METROPOLITANA</li>
          <li>COMPLEMENTOS: SUL E SÃO PAULO</li>
          <li>CARGAS COMPLETAS:TODO BRASIL</li>
          </ul>

      </div>
    </div>
  )
}

export default Middle