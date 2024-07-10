import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLockClosed } from "react-icons/hi";
import { BsBook } from "react-icons/bs";
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import pdf from "./create_jobs_info_pack.pdf"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] text-[#dbb434]'>
      <Link to='home' smooth={true} duration={500}>
      <img src={Logo} alt='Logo'  style={{ width: '100px' }}/> 
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
            About Us
          </Link>
        </li>
        <li>
          <Link to='aim' smooth={true} duration={500}>
            Our Aim
          </Link>
        </li>
        <li>
          <Link to='candidates' smooth={true} duration={500}>
            Candidates
          </Link>
        </li>
        <li>
          <Link to='companies' smooth={true} duration={500}>
            Companies
          </Link>
        </li>
        <li>
          <Link to='privacy' smooth={true} duration={500}>
            Privacy
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
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
            About Us
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='aim' smooth={true} duration={500}>
            Our Aim
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='candidates' smooth={true} duration={500}>
            Candidates
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='companies' smooth={true} duration={500}>
            Companies
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='privacy' smooth={true} duration={500}>
           Privacy
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {/* icons slide in and out and styling */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e577f]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/company/create-jobs-recruitment/'
            >
              Follow Us<FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#102820]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:hello@createjobs.co.uk'
            >
              Email Us <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4c6444]'>
            <button
              className='flex justify-between items-center w-full text-gray-300'> <Link to='privacy' smooth={true} duration={500}>Privacy</Link>
               <HiOutlineLockClosed size={30} />
            </button>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8a6240]'>
          <a
              className='flex justify-between items-center w-full text-gray-300'
              href={pdf} download="Create Jobs Info Pack.pdf">Download Info Pack<BsBook size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;