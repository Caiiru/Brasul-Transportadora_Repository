import React from 'react'
import './middle.css'
import { Budget } from './../../components'
import { map } from './import.js';
import { FaClock } from 'react-icons/fa'

const Middle = () => {
  return (
    <div className='brasul__site-middle'>
      <Budget />
      <br/>
      <br/>
      <div className='brasul__site-middle_title'>
        <h2>DO SUL PARA TODO BRASIL</h2>
      </div>
      <div className='brasul__site-middle_content'>
        <img src={map} />
        <div className='brasul__site-midle_content-list'>
          <ul>
            <li> CARGAS FRACIONADAS: CURITIBA E REGIÃO METROPOLITANA</li>
            <li>COMPLEMENTOS: SUL E SÃO PAULO</li>
            <li>CARGAS COMPLETAS:TODO BRASIL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Middle