import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-[#050d1c] to-[#0d8bb9]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          CREATE JOBS
        </h1>
        {/* <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>
        Recruitment
        </h2> */}

        <ReactTyped
          className='text-4xl sm:text-5xl font-bold text-[#8892b0]'
            strings={[
              " Recruitment",
              " Technology",
            " Corporate",
            " Permanent",
            " Contract",
            ]}
      typeSpeed={80}
      backSpeed={60}
      loop/>

        {/* <ReactTyped
          className='pt-4 text-[#dbb434]'
            strings={[
            "Technology Recruitment Experts - Creating Tomorrow's Teams Today!"]}
      typeSpeed={30} /> */}

        <i className='pt-4 text-[#dbb434]'>Independent Recruitment Experts - Creating Tomorrow's Teams Today!</i>
        <p className='py-4 text-[#8892b0] max-w-[700px]'>
       
        Welcome to Create Jobs, where innovation meets talent in the dynamic world of technology. Our mission is to revolutionise the tech recruitment experience, offering a personalised approach that goes beyond traditional methods. At Create Jobs, we're not just shaping careers; we're building the future of tech together.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000]'>
          <Link to='contact' smooth={true} duration={500}>Get in Touch </Link>
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

export default Home;