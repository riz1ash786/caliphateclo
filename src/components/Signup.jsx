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
        <div>
            <div className='pt-28 sm:pt-0 py-10 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#dbb434] text-gray-300'>SIGN UP</p>

            </div>
            <div className='pb-10 sm:pb-2 pt-0 sm:pt-4 max-w-[1000px] w-full grid gap-8 px-2 text-gray-300'>
            <div className='text-center items-center'>
              <p>Business Inquiries</p>
              <p>Email: <a className='hover:text-[#dbb434]' href='mailto:info@caliphateclo.com'>info@caliphateclo.com</a></p>

            </div>
            <div className='pt-16 max-w-[1000px] w-full grid grid-cols-4 gap-8 px-2'>             
              <p><a className='pt-2 flex justify-center text-gray-300 hover:text-[#dbb434]'
              href='https://www.instagram.com/'><FaInstagram size={30} /></a></p>
                          <p><a className='pt-2 flex justify-center text-gray-300 hover:text-[#dbb434]'
              href='https://www.facebook.com/'><CiFacebook size={30} /></a></p>
                          <p><a className='pt-2 flex justify-center text-gray-300 hover:text-[#dbb434]'
              href='https://www.x.com/'><FaXTwitter size={30} /></a></p>
                          <p>        <a className='pt-2 flex sm:justify-center' href={pdf2} download="Caliphate Clo. Diversity & Inclusion Statement.pdf"><MdOutlineDiversity3 size={30} className='hover:text-[#dbb434]'/></a></p>
            </div>
          </div>
            {/* <input className='text-center my-4 mx-10 p-2 bg-gray-300' type="email" placeholder='Email address' name='email' />
              <button className='text-white border-2 hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000] px-8 py-3 my-2 mx-auto flex items-center' type='submit' value='Send'>Sign Up</button> */}
              
    <div className="pt-8 sm:pt-4 mx-auto max-w-7xl px-6 lg:px-8 pb-20 sm:pb-0">
    <div
        className="relative isolate overflow-hidden bg-[#000000] px-6 py-12 shadow-2xl rounded-xl sm:rounded-2xl sm:px-24 xl:py-24">
       
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Keep Updated
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
        Stay connected for the latest drops and exclusive brand updates.
        </p>

        <form ref={form} onSubmit={sendEmail}>
        <div className="mx-auto mt-10 flex max-w-md gap-x-4">  
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required="" className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6" placeholder="Enter your email"/>

            <button type="submit"className="flex-none rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[#dbb434] hover:text-[#000000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300">Notify me</button>
            </div>
        </form>

        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7">
            </circle>
            <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                    gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                    <stop stopColor="#a2784b"></stop>
                    <stop offset="1" stopColor="#dbb434" stopOpacity="0"></stop>
                </radialGradient>
            </defs>
        </svg>
    </div>
</div>
</div>
</div>



  )
  
  
}

export default Signup