import React from 'react'
import Caorusel from '../../components/Caorusel'
import Line from '../../components/Line'

function Blog() {
  return (
    <div className='blog' id='blog'>
        <div className="title-cont">
            <div className="title-title">Блог</div>
            <Line />
        </div>
        <div className="blog-slider">
            <Caorusel />
        </div>
    </div>
  )
}

export default Blog