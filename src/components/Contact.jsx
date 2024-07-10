import {FaLinkedin,} from 'react-icons/fa';
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
    <div name='contact' className='w-full h-auto bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#dbb434] text-gray-300'>Contact Us</p>
                <p className='text-gray-300 py-8'>Submit your inquiries in the form below or contact us directly;</p>
            </div>
            <div className='pb-8 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-2 text-gray-300'>
            <div className='sm:text-center'>
              <p>Rizwan Ashraf</p>
              <p>Email: <a className='hover:text-[#dbb434]' href='mailto:rizwan@createjobs.co.uk'>rizwan@createjobs.co.uk</a></p>
              <p>Mobile: +44 7976 257860</p>
              <p><a className='pt-2 flex sm:justify-center text-gray-300 hover:text-[#dbb434]'
              href='https://www.linkedin.com/in/riz1ash786/'><FaLinkedin size={30} /></a></p>
            </div>
            <div className='sm:text-center items-center'>
              <p>Business Inquiries</p>
              <p>Email: <a className='hover:text-[#dbb434]' href='mailto:hello@createjobs.co.uk'>hello@createjobs.co.uk</a></p>
              <p>Whatsapp: +44 7976 257860</p>
              <p><a className='pt-2 flex sm:justify-center text-gray-300 hover:text-[#dbb434]'
              href='https://www.linkedin.com/company/create-jobs-recruitment/'><FaLinkedin size={30} /></a></p>
            </div>
          </div>
            <input className='bg-[#e3f7ff] p-2' type="text" placeholder='Name' name='from_name' />
            <input className='my-4 p-2 bg-[#e3f7ff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#e3f7ff] p-2' name="message" rows="10" placeholder='Your Message'></textarea>
            <button className='text-white border-2 hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000] px-4 py-3 my-8 mx-auto flex items-center' type='submit' value='Send'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact