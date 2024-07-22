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
          <div className='sm:text-right py-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>
              COLLECTIONS
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>

              <p>Consciously Crafted Luxury Streetwear. </p>
            </div>
            <div>
              <p>Introducing Caliphate Collections. Cultured, minimalist clothing, 
                embodying our core principles of maintaining luxury design, quality and sustainable production processes.</p>
            </div>
          </div>
          <div className='pt-8 max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 py-8'>
           <div>
            <div
            style={{ backgroundImage: `url(${tshirt})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>GUIDED COLLECTION</p> <p className=' pt-2 pb-8 text-center'>Caliphate Mainline House Collection: Luxury pieces combining premium materials with contemporary design.</p>
            </div>
            <div>
              <div
            style={{ backgroundImage: `url(${hoodie})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>SHELL COLLECTION</p><p className='pt-2 pb-8 text-center'>Caliphate Hoodies and Sweatpants: Made using high-quality fabrics, seamlessly blending comfort with style.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${cap})` }}
            className='shadow-lg shadow-[#040c16] mx-auto content-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>
              ATTACHMENTS COLLECTION</p><p className='pt-2 pb-8 text-center'>Complete the look with our high build, unstructured trucker Caps featuring siganture Caliphate branding.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Collections;