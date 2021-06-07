// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/click-theme.css";//
import React from 'react';
import Slider from 'react-slick';
import slide_one from '../../resources/images/one.jpeg';
import slide_two from '../../resources/images/two.jpeg';
import slide_three from '../../resources/images/three.jpeg';

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div
      className="carrousel_Wrapper"
      style={{
        background: 'red',
        height: `${window.innerHeight}px`,
        overflow: 'hidden',
      }}
    >

      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image "
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image "
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image "
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>

      </Slider>

    </div>

  );
};
export default Carrousel;
