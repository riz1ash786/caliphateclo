import React from 'react'

import {
    FaInstagram,
} from 'react-icons/fa'
import { CiFacebook,} from "react-icons/ci";
import { MdOutlineDiversity3 } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi';
import pdf2 from "./diversity_inclusion_statement.pdf"



const Footer = () => {
  return (
    <div className='w-full mx-auto grid md:grid-cols-3 py-12 px-4 gap-12 text-gray-300 bg-[#000000]'>
    <div>
    <h1 className='w-full text-3xl font-bold text-[#dbb434] flex '>CALIPHATE CLO. LIMITED</h1>
    <p className='py-4'>Thank you for visiting Caliphate Clo. Stay connected by following us on Social Media for updates & industry insights.
    For collaboration inquiries please get in touch at info@calipahteclo.co.uk. 
    Copyright&#169; 2024 Caliphate Clo. Limited. All rights reserved.</p>
  
  <div className='flex justify-between md:w-[75%] my-2'>
        <a href='https://www.x.com/'><FaXTwitter size={30} className='hover:text-[#dbb434]' /></a>
        <a href={pdf2} download="Create Jobs Diversity & Inclusion Statement.pdf"><MdOutlineDiversity3 size={30} className='hover:text-[#dbb434]'/></a>
        <a href='mailto:info@caliphateclo.com'><HiOutlineMail size={30} className='hover:text-[#dbb434]'/></a>
        <a href='https://www.Facebook.com/'><CiFacebook size={30} className='hover:text-[#dbb434]'/></a>
        <a href='https://www.Instagram.com/'><FaInstagram size={30} className='hover:text-[#dbb434]'/></a>
  </div>
  </div>
  <div className='lg:col-span-2 flex-col md:flex-row flex justify-between pt-4 gap-4 md:gap-16'>
<div>
<h1 className='font-medium text-gray-500 flex'>Diversity & Inclusion</h1>
    <p className='text-gray-300 py-2'>We value diversity & inclusion & strive to connect with a diverse pool of people from different backgrounds, 
    fostering environments where all individuals can contribute & succeed. To read more about our commitment to Diversity please click 
    <a className='hover:text-[#dbb434] hover:font-bold' href={pdf2} download="Create Jobs Diversity & Inclusion Statement.pdf"> here.</a></p>
</div>
<div>
<h1 className='font-medium text-gray-500 flex'>Sustainability</h1>
    <p className='text-gray-300 py-2'>We are dedicated to creating timeless fashion through sustainable and ethical practices. 
    Our commitment to the planet is reflected in every step of our production process, 
    from sourcing eco-friendly materials to ensuring fair labour conditions for all involved in Caliphate Clo. operations.</p>
</div>
  </div>
  </div>
    );
};

export default Footer