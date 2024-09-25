import React from 'react';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import googleplus from '../assets/Google+.png';
import youtube from '../assets/Youtube.png';
import '../components/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='first-section'>
        <img src={facebook} alt='Facebook' />
        <img src={instagram} alt='Instagram' />
        <img src={twitter} alt='Twitter' />
        <img src={googleplus} alt='Google+' />
        <img src={youtube} alt='YouTube' />
      </div>
      <nav className='second-section'>
        <a href='#'>Home</a>
        <a href='#'>News</a>
        <a href='#'>About</a>
        <a href='#'>Contact Us</a>
        <a href='#'>Our Team</a>
      </nav>
      <div className='third-section'>
        <p>Copyright 2024. Designed by Aryan</p>
      </div>
    </footer>
  );
};

export default Footer;
