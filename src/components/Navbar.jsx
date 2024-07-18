import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaInstagram,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { CiFacebook } from "react-icons/ci";
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { FaXTwitter } from "react-icons/fa6";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-[#dbb434]'>
      <Link to='home' smooth={true} duration={500}>
      <img src={Logo} alt='Logo'  style={{ width: '40px' }}/> 
          </Link>

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
            Signup
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
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] flex flex-col justify-center items-center'
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
            Signup
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
              href='https://www.instagram.com'
            >
              Follow Us<FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.facebook.com'
            >
              Follow Us<CiFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.x.com'
            >
              Follow Us<FaXTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <button
              className='flex justify-between items-center w-full text-gray-300'> <Link to='signup' smooth={true} duration={500}>Subscribe</Link>
               <HiOutlineMail size={30} />
            </button>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;