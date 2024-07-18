import React from 'react';
import tshirt from '../assets/tshirt.png';
import hoodie from '../assets/hoodie.png';
import cap from '../assets/cap.png';

const Collections = () => {
  return (
    <div name='collections' className='w-full md:h-screen sm:h-auto bg-gradient-to-r from-[#452c12] to-[#a2784b] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          {/* move text right on expand over small */}
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>
              COLLECTIONS
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>

              <p>STAY GUIDED. STAY CALM. STAY FOCUSED. </p>
            </div>
            <div>
              <p>THE GUIDED. THE CALM. THE FOCUSED. Bringing you the Caliphate Clo. Collections. Cultured, minimalist clothing, 
                embodying our core principles of maintaining luxury design, quality and sustainable production processes.</p>
            </div>
          </div>
          <div className='pt-8 max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
           <div>
            <div
            style={{ backgroundImage: `url(${tshirt})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>THE GUIDED</p> <p className=' pt-2 pb-8 text-center'>HOUSE COLLECTION</p>
            </div>
            <div>
              <div
            style={{ backgroundImage: `url(${hoodie})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>THE CALM</p><p className='pt-2 pb-8 text-center'>SHELL COLLECTION</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${cap})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>
              THE FOCUSED</p><p className='pt-2 pb-8 text-center'>ATTACHMENTS COLLECTION</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Collections;