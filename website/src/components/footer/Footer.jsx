import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='brasul__site-footer'>
      <h1>Contatos</h1>
      <div className='brasul__site-footer_contact'>
        <h3>Email</h3>
        <p>Email@email.com</p>
        <h3>Número de telefone</h3>
        <p>(41)559999999</p>
        <h3>Endereço</h3>
        <p>Rua Endereço, 999 - Algum lugar</p>
      </div>
    </div>
  )
}

export default Footer