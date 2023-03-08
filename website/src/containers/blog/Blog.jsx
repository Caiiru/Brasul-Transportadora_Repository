import React from 'react'
import './blog.css'
import { Navbar, Header, Footer, Budget } from './../../components'
import { About, Middle } from './../../containers'

const Blog = () => {
  return (
    <div className='brasul__site-body'>
        <Header />
        <About />
        <Middle />
    </div>
  )
}

export default Blog