import React from 'react'
import './header.css'
import 'react-slideshow-image/dist/styles.css';
//import { header1, header2 } from './imports.js'
import ImageSlider from "./ImageSlider";

const Header = () => {
  const slides = [
    {
      url: "https://img.freepik.com/free-photo/trucks-highway-mountain-sunset_181624-61739.jpg?w=1380&t=st=1678738139~exp=1678738739~hmac=cb87f2ffd50236c5b565e8844375c92fb409b9dc41f122024a9ec47cba7966ee",
      title: "truck1"
    },
    {
      url: "https://img.freepik.com/free-photo/truck-vehicle-with-trailers-background_342744-1297.jpg?w=1380&t=st=1678739100~exp=1678739700~hmac=ae514faee7164a1cd404d989173a9a5f3bc1c88d7d859859f9a4ab98e8b54020",
      title: "truck2"
    },
  ];

  const containerStyles = {
    width: "1280px",
    height: '880px',
    margin: " 0 auto",

  }
  var viewport_width = window.innerWidth;
  return (


    <div className='brasul__site-header'>
      <div className='newSlider'  >
        <ImageSlider slides={slides} parentWidth={viewport_width} />

      </div>
      <br></br>
      <br></br>
      <div className='brasul__site-header-orcamento'>
        <a href="#orcamento" class='brasul__site-header-button'>Fazer um Orçamento</a>
      </div>
    </div>
  )
}

export default Header