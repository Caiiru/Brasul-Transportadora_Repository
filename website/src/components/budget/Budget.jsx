import React from 'react'
import './budget.css'
import { qrcode } from './import.js'; //imagem
import { useState } from 'react';
import FormSubmit from './FormSubmit.js'
import Form from './Form';

const formSubmit = new FormSubmit({
  url: 'http://localhost:3001/formulario',
  headers: {
    'Content-Type': 'application/json'
  }
});

const Budget = () => {
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

        {/* CARD DE EMAIL */}
        <div className='brasul__site-budget-card'>
          {/* form start */}
          <Form />
        </div>

      </div>
      <br></br><br></br>
      
    </div>
  )
}

export default Budget