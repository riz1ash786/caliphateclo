import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-[#452c12] to-[#a2784b] text-center'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          CALIPHATE CLO.
        </h1>

        <ReactTyped
          className='text-4xl sm:text-5xl font-bold text-[#9e9e9e]'
            strings={[
              " Luxury Streetwear",
            " British Design",
            " Coming Fall/Winter 2024",
            ]}
      typeSpeed={40}
      backSpeed={40}
      loop/>

        <i className='pt-4 text-[#dbb434]'>A British Luxury Streetwear Clothing Brand.</i>
        <p className='py-4 text-gray-300'>
        Our garments represent relentless effort, refinement, and continuous improvement. 
        Each piece is crafted through a meticulous design and production processes, with expert 
        craftsmanship evident in every collection, silhouette, and individual item.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 mx-auto flex items-center hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000]'>
          <Link to='collections' smooth={true} duration={500}>Discover Now </Link>
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