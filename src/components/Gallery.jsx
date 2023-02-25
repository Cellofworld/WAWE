import React from 'react'
import gallery1 from '../img/image/gallery1.png';
import gallery2 from '../img/image/gallery2.png';
import gallery3 from '../img/image/gallery3.png';
import gallery4 from '../img/image/gallery4.png';
import gallery5 from '../img/image/gallery5.png';
import gallery6 from '../img/image/gallery6.png';
import Line from './Line';


function Gallery() {

    const galleryImage = [
        {
            id: 1,
            src: gallery1,
            category: 'turists'
        },
        {
            id: 2,
            src: gallery2,
            category: 'turists'
        },{
            id: 3,
            src: gallery3,
            category: 'turists'
        },{
            id: 4,
            src: gallery4,
            category: 'turists'
        },{
            id: 5,
            src: gallery5,
            category: 'turists'
        },{
            id: 6,
            src: gallery6,
            category: 'turists'
        },
    ]


  return (
    <div className='gallery page-pd'>
        <div className="title-cont">
                <div className="title-title">ГАЛЕРЕЯ</div>
                <Line />
        </div>
        <div className="gallery-img-cont">
            {
                galleryImage.map((el) => (
                    <img className={`gallery-img frame-${el.id}`} key={el.id} src={el.src} alt={el.category} />
                ))
            }
        </div>
    </div>
  )
}

export default Gallery