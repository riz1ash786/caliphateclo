import React from 'react';
import rocket from '../assets/rocket.png';
import vision from '../assets/vision.png';
import pillars from '../assets/pillars.png';

const Aim = () => {
  return (
    <div name='aim' className='w-full md:h-screen sm:h-auto bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          {/* move text right on expand over small */}
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>
              Our Aim
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Create Jobs aims to fulfil the recruitment needs of our clients seeking the best technical talent</p>
            </div>
            <div>
              <p>Our aim is to assist our clients & candidates with their company & career goals. We do this with effective & efficient recruitment methods. 
                <br /> We are here to ease the strain caused to our clients when recruiting for staff & minimise the stress of finding a new role for our expert candidates!</p>
            </div>
          </div>
          <div className='pt-8 max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
           <div>
            <div
            style={{ backgroundImage: `url(${rocket})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>CREATE MISSION</p> <p className=' pt-2 pb-8 text-center'>To connect the best talent with rewarding opportunities.</p>
            </div>
            <div>
              <div
            style={{ backgroundImage: `url(${vision})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>CREATE VISION</p><p className='pt-2 pb-8 text-center'>Bridging talent to opportunity, shaping tomorrow's success.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${pillars})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>CREATE VALUES</p><p className='pt-2 pb-8 text-center'>To provide Integrity, Transparency & Collaboration.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Aim;