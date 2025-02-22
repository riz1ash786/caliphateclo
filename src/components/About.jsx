import React from 'react';

const About = () => {
  return (
    <div  name='about' className='w-full h-screen bg-gradient-to-r from-[#000000] to-[#000000] text-gray-300'>
      {/* Container */}
      <div className='text-center max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>ABOUT</p>
              <p className='font-bold pt-8'>  Introducing Caliphate Clothing: Luxury British Designed Streetwear Fashion.</p>
              <p className='py-4'>
              Combing opulence with urban sophistication into daily wearable fashion. Drawing inspiration from the rich cultural heritage of Britain and the dynamic 
              energy of street culture, Caliphate Clo. crafts exclusive pieces that exude elegance and modernity. 
              <p className='py-4'> Each collection showcases meticulous British craftsmanship, featuring premium materials and intricate detailing that 
              appeal to the discerning fashion enthusiast.</p>
 Committed to sustainability and ethical production, Caliphate Clo. 
              stands at the forefront of a fashion revolution, offering not just clothing, but a lifestyle of guided elegance and urban luxury.
                </p>
              <p className='py-4'>Embrace the essence of British innovation and streetwear refinement with Caliphate Clo. </p>
          </div>
      </div>
    </div>
  );
};

export default About;