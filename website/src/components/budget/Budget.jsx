import React from 'react'
import './budget.css'
import { qrcode } from './import.js';
import { useState } from 'react';

const Budget = () => {

  const [campos, setCampos] = useState({
    email:'',
    mensagem:''
  })

  function handleInputChange(event){
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }
  function handleFormSubmit(event){
    event.preventDefault();
    console.log(campos);
  }

  return (
    <div className='brasul__site-budget' id='orcamento'>
      <h2>Orçamento</h2>
      <div className='brasul__site-budget-container'>
        <div className='brasul__site-budget-card'>
          <div className='brasul__site-budget-card-container'>
            <h2>Whatsapp</h2>
            <p>Faça um orçamento
              personalizado via
              whatsapp</p>
            <img src={qrcode} alt='qrcode' />
            <p>ou</p>
            <div className='brasul__site-budget-card-links'>
              <a class='wppButton' target={'_blank'} href='https://api.whatsapp.com/send/?phone=554198335587&text=Ol%C3%A1,+gostaria+de+fazer+um+or%C3%A7amento&type=phone_number&app_absent=0'>
                Iniciar Conversa</a>
            </div>
          </div>

        </div>
        <div className='brasul__site-budget-card'>
          <div className='brasul__site-budget-card-title'>
            <h2>Email</h2>
            <input type='email' class='brasul__site-budget-email' size={30} placeholder='Seu Email' autoComplete='on' />
          </div>
          <br></br>
          <div className='brasul__site-budget-email-description_title'>
            <p>Descreva seu pedido</p>

            <textarea name='message' className='brasul__site-budget-email-description' id='message' size={30} cols={30} rows='7' placeholder='Descrição do pedido'></textarea>

          </div>
          <br></br>
          <a class='wppButton'>Enviar Email</a>

        </div>

      </div>
      <br></br><br></br>
    </div>
  )
}

export default Budget