import React from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';
import sliderImg1 from '../img/image/Rectangle3.png';




function Caorusel() {


    const dataSlider = [
        {
            id: 1,
            img: sliderImg1,
        },
        {
            id: 2,
            img: sliderImg1,
        },
        {
            id: 3,
            img: sliderImg1,
        },
        {
            id: 4,
            img: sliderImg1,
        },
        {
            id: 5,
            img: sliderImg1,
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };


  return (
    <div className='caorusel'>
        <Slider {...settings}>
        {
            dataSlider.map((el) => (
                <div className="slder-item" key={el.id}>
                    <img className='slider-img' src={el.img} alt='sliderImg'/>
                </div>
            ))
        }
        </Slider>
    </div>
  )
}

export default Caorusel