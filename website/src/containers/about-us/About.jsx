import React from 'react'
import './about.css'
import { Block } from '../../components'

const About = () => {
    return (
        <div className='About' id='sobre'>
            BRASUL
            <Block title='Transportadora Nova' text='Atendimento atencioso e personalizado com o cliente'/>
            <Block title='Qualificada Para o Sul' text='Somos especializados em garantir sua entrega em toda região Sul'/>
            <Block title='Rápida e Segura' text='Nosso objetivo é entregar seu pedido de maneira segura e veloz'/>
            <Block title='Fácil Contato' text='Temos diversas redes de contato onde você pode comunicar a companhar seu pedido' />        
        </div>
    )
}

export default About