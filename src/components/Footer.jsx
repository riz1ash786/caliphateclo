import React from 'react'

import {
    FaLinkedin,
} from 'react-icons/fa'
import { BsBook,} from "react-icons/bs";
import { MdOutlineDiversity3 } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi';
import pdf from "./create_jobs_info_pack.pdf"
import pdf2 from "./diversity_inclusion_statement.pdf"



const Footer = () => {
  return (
    <div className='w-full mx-auto grid md:grid-cols-3 py-12 px-4 gap-12 text-gray-300 bg-[#050d1c]'>
    <div>
    <h1 className='w-full text-3xl font-bold text-[#dbb434] flex '>CREATE JOBS LIMITED</h1>
    <p className='py-4'>Thank you for visiting Create Jobs. Stay connected by following us on Linkedin for updates & industry insights.
    For collaboration inquiries please get in touch at hello@createjobs.co.uk.
    Copyright&#169; 2024 Create Jobs Limited. All rights reserved.</p>
  
  <div className='flex justify-between md:w-[75%] my-2'>
        <a href='https://twitter.com/'><FaXTwitter size={30} className='hover:text-[#dbb434]' /></a>
        <a href={pdf2} download="Create Jobs Diversity & Inclusion Statement.pdf"><MdOutlineDiversity3 size={30} className='hover:text-[#dbb434]'/></a>
        <a href='mailto:hello@createjobs.co.uk'><HiOutlineMail size={30} className='hover:text-[#dbb434]'/></a>
        <a href={pdf} download="Create Jobs Info Pack.pdf"><BsBook size={30} className='hover:text-[#dbb434]' /></a>
        <a href='https://www.linkedin.com/company/create-jobs-recruitment/'><FaLinkedin size={30} className='hover:text-[#dbb434]'/></a>
  </div>
  </div>
  <div className='lg:col-span-2 flex-col md:flex-row flex justify-between pt-4 gap-4 md:gap-16'>
<div>
<h1 className='font-medium text-gray-500 flex'>Information Pack</h1>
    <p className='text-gray-300 py-2'>Create Jobs aims to not only fill vacancies but also facilitate long-term career growth & development. To learn more about us, view our company information pack by clicking 
    <a className='hover:text-[#dbb434] hover:font-bold' href={pdf} download="Create Jobs Info Pack.pdf"> here.</a></p>

</div>
<div>
<h1 className='font-medium text-gray-500 flex'>Diversity & Inclusion</h1>
    <p className='text-gray-300 py-2'>We value diversity & inclusion & strive to connect employers with a diverse pool of talented candidates, 
    fostering environments where all individuals can contribute & succeed. To read more about our commitment to Diversity please click 
    <a className='hover:text-[#dbb434] hover:font-bold' href={pdf2} download="Create Jobs Diversity & Inclusion Statement.pdf"> here.</a></p>
</div>
<div>
<h1 className='font-medium text-gray-500 flex'>Services</h1>
    <p className='text-gray-300 py-2'>Create Jobs offers a wide range of recruitment services, 
    including RPO packages tailored to suit your individual & organisational needs, incorporating candidate sourcing, screening & interviewing. We also offer free CV advice. To find out more get in touch, we would love to hear from you!</p>
</div>
  </div>
  </div>
    );
};

export default Footer