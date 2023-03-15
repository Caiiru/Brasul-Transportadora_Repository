import React from 'react'
import './budget.css'

const Budget = () => {
  return (
    <div className='brasul__site-budget'>
      <div className='brasul__site-budget-card'>
        <div className='brasul__site-budget-card-container'>
          <h2>Whatsapp</h2>
          <p>Faça um orçamento
            personalizado via
            whatsapp</p>
          <p>ou</p>
          <button type='button'>Iniciar Conversa</button>

        </div>

      </div>
      <div className='brasul__site-budget-card'>
        <h2>Email</h2>
        <p>Email</p>
        <input type='email' placeholder='Seu Email' />
        <p>Descreva seu pedido</p>
        <input type='text' placeholder='Descrição do pedido' />
        <button type='button'>Enviar Email</button>

      </div>


    </div>
  )
}

export default Budget