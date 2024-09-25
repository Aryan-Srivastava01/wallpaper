import React from 'react';
import Slider from 'react-slick';
import latest1 from '../assets/Latest Wallpaper1.jpg';
import latest2 from '../assets/Latest Wallpaper2.jpg';
import latest3 from '../assets/Latest Wallpaper3.png';
import latest4 from '../assets/Latest Wallpaper4.jpg';
import latest5 from '../assets/Latest Wallpaper5.jpg';
import latest6 from '../assets/Latest Wallpaper6.jpg';
import latest7 from '../assets/Latest Wallpaper7.jpg';
import latest8 from '../assets/Latest Wallpaper8.jpg';
import latest9 from '../assets/Latest Wallpaper9.jpg';
import latest10 from '../assets/Latest Wallpaper10.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/LatestWallpaper.css';

const LatestWallpaper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="full">
      <h1 className="lt">Latest Wallpaper</h1>
      <div className="carousel-container">
        <Slider {...settings}>
          <div><img src={latest1} alt="Wallpaper 1" /></div>
          <div><img src={latest2} alt="Wallpaper 2" /></div>
          <div><img src={latest3} alt="Wallpaper 3" /></div>
          <div><img src={latest4} alt="Wallpaper 4" /></div>
          <div><img src={latest5} alt="Wallpaper 5" /></div>
          <div><img src={latest6} alt="Wallpaper 6" /></div>
          <div><img src={latest7} alt="Wallpaper 7" /></div>
          <div><img src={latest8} alt="Wallpaper 8" /></div>
          <div><img src={latest9} alt="Wallpaper 9" /></div>
          <div><img src={latest10} alt="Wallpaper 10" /></div>
        </Slider>
      </div>
    </div>
  );
};

export default LatestWallpaper;
