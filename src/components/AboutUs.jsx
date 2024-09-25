import React from 'react';
import section1 from '../assets/One piece section 1.jpg';
import section2 from '../assets/One piece section 2.jpg';
import section3 from '../assets/One piece section 3.jpg';
import section4 from '../assets/one piece fourth section.jpg';
import '../components/AboutUs.css';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='section'>
        <h1>About Us</h1>
        <div className='content'>
          <p className='background-image'>
          Welcome to Wall Piece, your one-stop destination for high-quality wallpapers that transform your digital spaces into something truly extraordinary. Whether you're looking to refresh the look of your desktop, mobile phone, or any device, we offer a diverse collection of stunning wallpapers, ranging from nature and landscapes to abstract art, minimal designs, and much more.
          </p>
          <img src={section1} alt='About us section wallpaper' className='image-sec' />
        </div>
      </div>
      <div className='section'>
        <h1>Our Mission</h1>
        <div className='content'>
        <p className='background-image'>
          At Wall Piece, we believe that wallpapers are more than just background images—they are a form of self-expression. Our mission is to provide you with a carefully curated selection of beautiful, unique, and inspiring wallpapers that match your style, mood, and personality. We aim to enhance your digital experience by offering visually captivating wallpapers that make your screen come alive.
          </p>
          <img src={section2} alt='Our mission section wallpaper' className='image-sec' />
        </div>
      </div>
      <div className='section'>
        <h1>Why Choose Us</h1>
        <div className='content'>
        <p className='background-image'>
          Vast Collection: With thousands of wallpapers in a wide variety of categories, we guarantee you'll find something that resonates with you.
Regular Updates: We keep our collection fresh by regularly adding new wallpapers, so there's always something new to explore.
High Quality: All of our wallpapers are available in HD and 4K resolutions, ensuring they look crisp and sharp on any screen size.
Easy to Download: We provide easy, hassle-free downloads, so you can instantly apply your favorite wallpapers with just a click.
          </p>
          <img src={section3} alt='Why choose us section wallpaper' className='image-sec' />
        </div>
      </div>
      <div className='section'>
        <h1>Join Our Community</h1>
        <div className='content'>
        <p className='background-image'>
          We're more than just a wallpaper website—we're a growing community of individuals who love sharing and discovering beautiful visuals. Feel free to explore, share your favorites, and even submit your own creations. Our goal is to build a platform where creativity knows no bounds.

Thank you for choosing Wall Piece. We hope our wallpapers inspire you every day!
          </p>
          <img src={section4} alt='Community section wallpaper' className='image-sec' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
