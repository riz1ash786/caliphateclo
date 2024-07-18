import React from 'react';
import { BsBook } from "react-icons/bs";
import pdf from "./create_jobs_info_pack.pdf"

const About = () => {
  return (
    <div  name='about' className='w-full md:h-screen sm:h-auto bg-gradient-to-r from-[#000000] to-[#000000] text-gray-300'>
      {/* Container */}
      <div className='text-center max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>ABOUT</p>
              <p className='font-bold pt-8'>  Introducing Caliphate Clothing - The Guided, a Luxury British Design Fashion Streetwear Brand.</p>
              <p className='py-4'>
              Combing opulence with urban sophistication into daily wearbale fashion. Drawing inspiration from the rich cultural heritage of Britain and the dynamic 
              energy of street culture, Caliphate - the Guided crafts exclusive pieces that exude elegance and modernity. 
              <p className='py-4'> Each collection showcases meticulous British craftsmanship, featuring premium materials and intricate detailing that 
              appeal to the discerning fashion enthusiast.</p>
 Committed to sustainability and ethical production, Caliphate - the Guided 
              stands at the forefront of a fashion revolution, offering not just clothing, but a lifestyle of guided elegance and urban luxury.
                </p>
              <p className='py-4'>Embrace the essence of British innovation and streetwear refinement with Caliphate - The Guided. </p>
          </div>
          <div className='md:hidden'> 
            <p className='text-gray-300 pt-8 text-center font-bold'>To learn more about Create Jobs, view our company information pack by clicking the button below.</p>
          <button className='text-white group border-2 hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000] px-4 py-3 my-8 mx-auto items-center flex'>
          <a
              className='w-[200px] h-[25px] flex justify-between items-center'
              href={pdf} download="Create Jobs Info Pack.pdf">Create Jobs Info Pack<BsBook size={30} />
            </a>
          </button>
          </div>
      </div>
    </div>
  );
};

export default About;