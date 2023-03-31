import React, { useState } from 'react';
import FormSubmit from './FormSubmit.js';
import emailjs from '@emailjs/browser';
const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("Handle Form Submit");
        try { 
            const templateParams ={
                from_name: name,
                message: message,
                email: email

            }
            emailjs.send("service_orm9ak9","template_jdjasml",templateParams, "4FoJcvgga_Z-tZKtm").then((response) => { 
                setSent(true);
                console.log("Email Enviado", response.status, response.text);

            }, (err) =>{
                    setError(true);
                    setSent(false);
                    console.log('Error', err);
            })      
        }
        catch (error) {
            setError(true);
        }
        
    }

    const renderSucesso = () => (
        <div className='success'>
            <h1>Email Enviado!</h1>
        </div>
    );

    const renderError = () => (
        <div className='error'>
            <h1>Infelizmente não foi possivel enviar o email</h1>

        </div>
    );

    const renderForm = () => (
        <form onSubmit={handleFormSubmit}>
            <div className="brasul__site-budget-card-title">
                <h2>Email</h2>
            </div>
            <div className='brasul__site-budget-card-content'>
                <label>Nome</label>
                <input type='text'
                    classname='brasul__site-budget-email'
                    name='name'
                    id='name'
                    size={30}
                    placeholder='Seu Nome'
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                    required
                />
                <br />
                <label name='id' id='email'>Email</label>
                <input type='email'
                    name='email'
                    id='email'
                    classname='brasul__site-budget-email'
                    size={30}
                    placeholder='Seu Email'
                    autoComplete="on"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    required
                />
            </div>
            <br />
            <div className="brasul__site-budget-email-description_title">
                <label>Descreva seu pedido</label>
                <textarea name='message'
                    className="brasul__site-budget-email-description"
                    id='message'
                    size={30}
                    cols={30}
                    rows='7'
                    maxLength={999}
                    placeholder='Descrição do pedido'
                    onChange={(e)=> setMessage(e.target.value)}
                    value={message}
                    required></textarea>
            </div>
            <br />
            <button
                className="wppButton"
                type="submit">Enviar Email</button>
        </form>
    );

    return (
        <div>
            {sent ? renderSucesso() : error ? renderError() : renderForm()}
        </div>

    );
}

export default Form;