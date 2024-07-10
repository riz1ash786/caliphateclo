import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Privacy = () => {
  return (
    <div  name='privacy' className='w-full md:h-screen sm:h-auto bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] text-gray-300'>
      {/* Container */}
      <div className='text-center max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>Privacy</p>
              <p className='pt-8 text-left'>Create Jobs is committed to protecting the privacy & security of the personal information of our clients, candidates, & website visitors. This Privacy Statement outlines how we collect, use, disclose, & protect your information.</p>
              <p className='font-bold pt-6 text-left'> Information We Collect: </p>
              <p className='text-left'> We may collect various types of information from you, including:</p>
              <p className='pt-2 text-left'> 
                <ul type="lower-roman" style={{ listStyleType: 'circle' }}>
                  <li>Personal information such as your name, contact details, employment history, & qualifications.</li>
                  <li>Information provided in your resume, cover letter, or during interviews.</li>
                  <li>Information about your preferences & interests related to job opportunities.</li>
                </ul>
              </p>
              <p className='font-bold pt-6 text-left'> How We Use Your Information:</p>
              <p className='text-left'> We use the information we collect for the following purposes:</p>
              <p className='pt-2 text-left'> 
                <ul type="lower-roman" style={{ listStyleType: 'circle' }}>
                  <li>To provide recruitment & staffing services, including matching candidates with job opportunities.</li>
                  <li>Information provided in your resume, cover letter, or during interviews.</li>
                  <li>Information about your preferences & interests related to job opportunities.</li>
                  <li>To comply with legal obligations & enforce our terms & policies.</li>
                </ul>
              </p>
              <p className='font-bold pt-6 text-left'> Data Sharing:</p>
              <p className='text-left'> We may share your information with:</p>
              <p className='pt-2 text-left'> 
                <ul type="lower-roman" style={{ listStyleType: 'circle' }}>
                  <li>Prospective employers or clients for recruitment purposes.</li>
                  <li>To communicate with you about job openings, interview opportunities, & other relevant updates.</li>
                  <li>To customise our services & improve your experience.</li>
                </ul>
              </p>
              <p className='font-bold pt-6 text-left'> Your Rights & Choices:</p>
              <p className='text-left'> You have the right to:</p>
              <p className='pt-2 text-left'> 
                <ul type="lower-roman" style={{ listStyleType: 'circle' }}>
                  <li>Access & update your personal information.</li>
                  <li>Object to the processing of your information for certain purposes.</li>
                  <li>Request the deletion of your information, subject to legal requirements.</li>
                </ul>
              </p>
              <p className=' pt-6 text-left'>If you'd like to view, modify, or delete your personal information, please reach out to us. We're here to assist you with your request.</p>

              <button className='text-white group border-2 hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000] px-4 py-3 my-8 mx-auto flex items-center'>
          <Link to='contact' smooth={true} duration={500}>Contact </Link>
            {/* rotate arrow on hover */}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </div>
      </div>
    </div>
  );
};

export default Privacy; 