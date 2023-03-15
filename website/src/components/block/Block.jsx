import React from 'react'
import './block.css'

const Block = ({ title, text }) => {
  return (
    <div className='brasul__site-container_block'>
      <div className='brasul__site-container_block-title'>
        <h3>{title}</h3>
      </div>
      <div className='brasul__site-container_block-gradient'>
        <div>
          
        </div>
      </div>
      <div className='brasul__site-container_block-content'>
        <div>
          <p>{text}</p>
        </div>
      </div>

    </div>
  )
}

export default Block