import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from './assets/images/bagimg.jpg';
import img2 from './assets/images/shirtimg.jpg';
import img3 from './assets/images/chainImg.jpg';
import img4 from './assets/images/jacketImg.jpg';


const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  const imageStyle = {
    maxHeight: '500px', // Adjust height as needed
    maxWidth: '500px', // Adjust width as needed
  };

  const sliderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400%',
  };

  return (
    <div className="slider-container mx-auto">
    <Slider {...settings}  style={sliderStyle}>
      <div>
       {/* <h3>1</h3> */}
       <img src={img1} alt=""  style={imageStyle}/>
      </div>
      <div>
      <img src={img2} alt="" style={imageStyle} />
      </div>
      <div>
      <img src={img3} alt="" style={imageStyle} />
      </div>
      <div>
      <img src={img4} alt="" style={imageStyle} />
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  </div>
  )
}

export default Carousel
