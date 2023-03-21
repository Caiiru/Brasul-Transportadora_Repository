import React from 'react'
import './budget.css'
import { qrcode } from './import.js'; //imagem
import { useState } from 'react';
import FormSubmit from './FormSubmit.js'

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
          <form className='form'
            data-form
            action="" >
            <div className='brasul__site-budget-card-title'>
              <h2>Email</h2>
              <input type='text'
                class='brasul__site-budget-email'
                name='nome'
                id='nome'
                size={30}
                placeholder='Seu Nome'

                required
              />
              <br></br>
              <input type='email'
                class='brasul__site-budget-email'
                name='email'
                id='email'
                size={30}
                placeholder='Seu Email'
                autoComplete='on'
                required
              />
            </div>
            <br></br>
            <div className='brasul__site-budget-email-description_title'>
              <p>Descreva seu pedido</p>

              <textarea name='mensagem'
                className='brasul__site-budget-email-description'
                id='mensagem'
                size={30}
                cols={30}
                rows='7'
                maxLength={600}
                placeholder='Descrição do pedido'
                required
              >
              </textarea>
              <br></br>
            </div>
            <button
              className='wppButton'
              type='submit'
              data-button
            >
              Enviar Email
            </button>
          </form>

        </div>

      </div>
      <br></br><br></br>
    </div>
  )
}

export default Budget