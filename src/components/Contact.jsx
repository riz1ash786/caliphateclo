import {FaInstagram,} from 'react-icons/fa';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2at2dff', 'template_nop409g', form.current, {
        publicKey: '3mJGxmnteNQKF2TWt',
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
    <div name='contact' className='w-full h-auto bg-gradient-to-r from-[#000000] to-[#000000] flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#dbb434] text-gray-300'>Contact Us</p>
                <p className='text-gray-300 py-8'>Submit your inquiries in the form below or contact us directly;</p>
            </div>
            <div className='pb-8 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-2 text-gray-300'>
            <div className='sm:text-center'>
              <p>Customer Services</p>
              <p>Email: <a className='hover:text-[#dbb434]' href='mailto:rizwan@createjobs.co.uk'>help@calipahteclo.com</a></p>

              <p><a className='pt-2 flex sm:justify-center text-gray-300 hover:text-[#dbb434]'
              href='https://www.linkedin.com/in/riz1ash786/'><FaInstagram size={30} /></a></p>
            </div>
            <div className='sm:text-center items-center'>
              <p>Business Inquiries</p>
              <p>Email: <a className='hover:text-[#dbb434]' href='mailto:hello@createjobs.co.uk'>info@calipahteclo.com</a></p>
              <p><a className='pt-2 flex sm:justify-center text-gray-300 hover:text-[#dbb434]'
              href='https://www.linkedin.com/company/create-jobs-recruitment/'><FaInstagram size={30} /></a></p>
            </div>
          </div>
            <input className='text-center my-4 p-2 bg-[#e3f7ff]' type="email" placeholder='Email' name='email' />

            <button className='text-white border-2 hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000] px-4 py-3 my-8 mx-auto flex items-center' type='submit' value='Send'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default Contact