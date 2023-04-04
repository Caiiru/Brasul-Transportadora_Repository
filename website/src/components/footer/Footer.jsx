import React from 'react';
import './footer.css';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { logo } from './import.js';

const Footer = () => {
  return (
    <div className='section__padding'>
      <div className='brasul__site-footer' id='contato'>
        <div className='brasul__site-footer-links-logo'>
          {/*Logo Brassul*/}
          <img src={logo} alt='Logo Brasul' />
        </div>
        <div className='brasul__site-footer-links'>
          <div className='brasul__site-footer-links_div'>
            <h4>Fazer Orçamento</h4>
            <div className='brasul__site-footer-links_div-container'>
              <button>
                <a href='#orcamento'>
                  Email <BsArrowRight />
                </a>
              </button>
              <button>
                <a
                  target={'_blank'}
                  href='https://api.whatsapp.com/send/?phone=554198335587&text=Ol%C3%A1,+gostaria+de+fazer+um+or%C3%A7amento&type=phone_number&app_absent=0'
                >
                  Whatsapp <BsArrowRight />
                </a>
              </button>
            </div>

          </div>

          <div className='brasul__site-footer-links_div'>
            <h3>Contatos</h3>
            <div className='brasul__site-footer-links_div-container'>
              <button>
                <a href='tel:+554133353333'> 
                  <p>É esse mesmo o numero? 4133353333</p>
                  <FaPhone /> Telefone
                </a>
              </button>
              <button>
                <a
                  target={'_blank'}
                  href='https://www.instagram.com/brassultransportes/'
                >
                  <FaInstagram /> Instagram
                </a>
              </button>
              <button>
                <a href='mailto:contato@brasul.com.br'>
                  <FaEnvelope /> Email
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
