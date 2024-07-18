import React from 'react';
import rocket from '../assets/rocket.png';
import vision from '../assets/vision.png';
import pillars from '../assets/pillars.png';

const Aim = () => {
  return (
    <div name='aim' className='w-full md:h-screen sm:h-auto bg-gradient-to-r from-[#452c12] to-[#a2784b] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          {/* move text right on expand over small */}
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>
              Collections
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>

              <p>THE GUIDED. DAWN X DUSK. 5IGNATURE. </p>
            </div>
            <div>
              <p>THE GUIDED. Our guided signature range is a capsule of minimalist clothing, embodying our core principles of maintaining luxury design, quality and production processes.</p>
            </div>
          </div>
          <div className='pt-8 max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
           <div>
            <div
            style={{ backgroundImage: `url(${rocket})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>DAWN X DUSK</p> <p className=' pt-2 pb-8 text-center'>To connect the best talent with rewarding opportunities.</p>
            </div>
            <div>
              <div
            style={{ backgroundImage: `url(${vision})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>THE GUIDED</p><p className='pt-2 pb-8 text-center'>Bridging talent to opportunity, shaping tomorrow's success.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${pillars})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>5ignature</p><p className='pt-2 pb-8 text-center'>To provide Integrity, Transparency & Collaboration.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Aim;