import {FaInstagram,} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineDiversity3 } from "react-icons/md";
import pdf2 from "./diversity_inclusion_statement.pdf"

export const Signup = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_snx9x2a', 'template_z9it6u5', form.current, {
        publicKey: 'o4lOPQbCUQ85p4mq3',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message Sent');
        },
        (error) => {
          console.log(error.text);
        },
      );
      e.target.reset()
  };
  
  return (
    <div name='signup' className='w-full md:h-screen sm:h-auto bg-gradient-to-r from-[#000000] to-[#000000] flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full pb-16'>
            <div className='pt-28 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#dbb434] text-gray-300'>SIGN UP</p>
                <p className='text-gray-300 py-8'>Stay connected for the latest drops and exclusive brand updates;</p>
            </div>
            <div className='pb-4 max-w-[1000px] w-full grid gap-8 px-2 text-gray-300'>
            <div className='text-center items-center'>
              <p>Business Inquiries</p>
              <p>Email: <a className='hover:text-[#dbb434]' href='mailto:info@caliphateclo.com'>info@caliphateclo.com</a></p>

            </div>
            <div className='pb-4 max-w-[1000px] w-full grid grid-cols-4 gap-8 px-2'>             
              <p><a className='pt-2 flex sm:justify-center text-gray-300 hover:text-[#dbb434]'
              href='https://www.instagram.com/'><FaInstagram size={30} /></a></p>
                          <p><a className='pt-2 flex sm:justify-center text-gray-300 hover:text-[#dbb434]'
              href='https://www.facebook.com/'><CiFacebook size={30} /></a></p>
                          <p><a className='pt-2 flex sm:justify-center text-gray-300 hover:text-[#dbb434]'
              href='https://www.x.com/'><FaXTwitter size={30} /></a></p>
                          <p>        <a className='pt-2 flex sm:justify-center' href={pdf2} download="Caliphate Clo. Diversity & Inclusion Statement.pdf"><MdOutlineDiversity3 size={30} className='hover:text-[#dbb434]'/></a></p>
            </div>
          </div>
            <input className='text-center my-4 mx-32 p-2 bg-gray-300' type="email" placeholder='Email address' name='email' />
              <button className='text-white border-2 hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000] px-8 py-3 my-2 mx-auto flex items-center' type='submit' value='Send'>Sign Up</button>
        </form>
    </div>

  )
  
  
}

export default Signup