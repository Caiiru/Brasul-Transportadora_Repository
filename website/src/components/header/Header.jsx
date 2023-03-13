import React from 'react'
import './header.css'

import { header1, header2 } from './imports.js'
const Header = () => {
  let slideIndex=1;
  showSlides(slideIndex);

  function plusSlides(n){
    showSlides(slideIndex+=n)

  }
  function currentSlide(n){
    showSlides(slideIndex = n);
  }

  function showSlides(n){
    let i;
  }
  return (
    <div className='brasul__site-header'>
      <div className='brasul__site-header-slidershow'>
        <div className='brasul__site-header-slidershow_fade'>
          <div className='brasul__site-header-slidershow_numbertext'> 1 / 2</div>
          <img src={header1} className='Image-Header' alt='header-truck1' />
        </div>
        <div className='brasul__site-header-slidershow_fade'>
          <div className='brasul__site-header-slidershow_numbertext'> 2 / 2</div>
          <img src={header2} className='Image-Header' alt='header-truck2' />
        </div>

        <a className='prev' onClick='plusSlides(-1)'> &#10094;</a>
        <a className='next' onClick='plusSlides(1)'> &#10095;</a>

      </div>
      <div className='dots'>
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
      <div className='brasul__site-header-orcamento'>
        <button type='button'>Solicitar Orçamento</button>
      </div>
    </div>
  )
}

export default Header