import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaTiktok,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-scroll';
import { BsInstagram } from "react-icons/bs";
// import { FaXTwitter } from "react-icons/fa6";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='navbar fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300'>
     <ul className='md:flex'>
        <li>
        <Link to='main' smooth={true} duration={500}>
        <p className='text-xl text-gray-300 font-bold'>CALIPHATE</p>
          </Link>
        </li>
      </ul>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
        <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='collections' smooth={true} duration={500}>
            Collections
          </Link>
        </li>
        <li>
          <Link to='signup' smooth={true} duration={500}>
            Sign Up
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#452c12] to-[#a2784b] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
            {/* Link for smooth mobile scrolling */}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='collections' smooth={true} duration={500}>
            Collections
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='signup' smooth={true} duration={500}>
            Sign Up
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {/* icons slide in and out and styling */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/caliphate_clo?igsh=MXRtZGd1emt2YmdobQ%3D%3D&utm_source=qr'
            >
              Follow Us<BsInstagram size={28} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.facebook.com'
            >
              Follow Us<FaFacebookF size={28} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.tiktok.com/@caliphate.clo?_t=8oLWs5Z6Sv3&_r=1'
            >
              Follow Us<FaTiktok size={28} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:info@caliphateclo.com'
            >
              Email Us<AiOutlineMail size={28} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;