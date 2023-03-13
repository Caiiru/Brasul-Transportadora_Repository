import React from 'react'
import './header.css'
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { header1, header2 } from './imports.js'

const Header = () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n)

  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
  }

  const slideImages = [
    "https://img.freepik.com/free-photo/trucks-highway-mountain-sunset_181624-61739.jpg?w=1380&t=st=1678738139~exp=1678738739~hmac=cb87f2ffd50236c5b565e8844375c92fb409b9dc41f122024a9ec47cba7966ee",
    "https://img.freepik.com/free-photo/truck-vehicle-with-trailers-background_342744-1297.jpg?w=1380&t=st=1678739100~exp=1678739700~hmac=ae514faee7164a1cd404d989173a9a5f3bc1c88d7d859859f9a4ab98e8b54020",

  ];
  const divStyle = {
  }

  const properties = {
    duration: 5000,
    backgroundSize:'contain',
    autoplay: false,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    easing: 'ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '720px'
  };
  return (


    <div className='brasul__site-header'>
      <div className='slide-container'>
        <Slide  {...properties}>
          {slideImages.map((each, index) => (
            <div className='each-slide' key={index}>
              <img className='lazy' src={each} alt='sample' />
            </div>
          ))}
        </Slide>
      </div>
      <div className='brasul__site-header-slidershow'>
        <div className='brasul__site-header-slidershow_fade'>
          <div className='brasul__site-header-slidershow_numbertext'> 1 / 2</div>
          <img src={header1} className='Image-Header' alt='header-truck1' />
        </div>
        <div className='brasul__site-header-slidershow_fade'>
          <div className='brasul__site-header-slidershow_numbertext'> 2 / 2</div>
          <img src={header2} className='Image-Header' alt='header-truck2' />
        </div>

      </div>
      <div className='brasul__site-header-orcamento'>
        <button type='button'>Solicitar Orçamento</button>
      </div>
    </div>
  )
}

export default Header