import React from 'react';
import learn from '../assets/learn.png';
import balloons from '../assets/balloons.png';
import engage from '../assets/engage.png';
import wordpress from '../assets/wordpress.png';
import monzo from '../assets/monzo.png';
import slack from '../assets/slack.png';
import emirates from '../assets/emirates.png';
import emaar from '../assets/emaar.png';
import mclaren from '../assets/mclaren.png';
import cisco from '../assets/cisco.png';
import ring from '../assets/ring.png';
import mandm from '../assets/mandm.png';
import cognizant from '../assets/cognizant.png';
import aliexpress from '../assets/aliexpress.png';
import salesforce from '../assets/salesforce.png';
import danone from '../assets/danone.png';
import zalando from '../assets/zalando.png';
import microsoft from '../assets/microsoft.png';
import aramco from '../assets/aramco.png';


const Companies = () => {
  return (
    <div name='companies' className='w-full md:h-auto bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='text-center max-w-[1000px] w-full grid gap-8'>
          {/* move text right on expand over small */}
          <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>
              Companies
            </p>
          </div>
          </div>
          <div> 
            <p className='text-gray-300 py-6 text-center'>We work with companies to attract & retain top-tier technical talent, driving innovation & success.</p>
            </div>
            <div className='pt-8 max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
            <div>
              <div
            style={{ backgroundImage: `url(${learn})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>LEARN</p><p className='pt-2 pb-8 text-center'>Throughout your Company's journey, from inception to where you are now & where you aim to be, we strive to comprehend every aspect. Exceptional recruiters enhance brands, & we're dedicated to advocating for yours.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${engage})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>ENGAGE</p><p className='pt-2 pb-8 text-center'>We'll ensure that your requirements are communicated effectively, reaching out to the appropriate talent. You'll only engage with candidates who meet your technical & cultural requirements.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${balloons})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>DELIVER</p><p className='pt-2 pb-8 text-center'>There's no greater accomplishment for us than connecting individuals who significantly impact your business. Our commitment to delivering exceptional candidates ensures that our clients thrive with the right talent by their side.</p>
            </div>
          </div>
          <div>
              <p className='pt-8 text-center'>We're truly grateful for the kind words companies have shared about us...</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-2 pt-8 gap-8'>
          <div
            style={{ backgroundImage: `url(${wordpress})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-white text-sm tracking-wider'>
              "Exceptional service, highly recommend the Create Jobs Team!" <br />Lead Developer
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${emaar})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-white text-sm tracking-wider'>
              "Professionalism at its best!" <br />Talent Manager
              </span>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${slack})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-white text-sm tracking-wider'>
              "Efficient and effective in finding top talent." <br />Senior Software Eng.
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${emirates})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-white text-sm tracking-wider'>
              "Rizwan always exceeds our expectations!" <br /> Delivery Manager
              </span>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${mclaren})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className= 'text-white text-sm tracking-wider'>
              "Incredibly responsive and resourceful." <br />Project Manager
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${aramco})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-white text-sm tracking-wider'>
              "Create Jobs truly understand our company culture." <br />HR Coordinator
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ring})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className= 'text-white text-sm tracking-wider'>
              "Consistently delivering outstanding candidates." <br />Talent Development Team
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mandm})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className= 'text-white text-sm tracking-wider'>
              "Quick turnaround and high-quality candidates." <br />HR Business Partner
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${salesforce})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className= 'text-white text-sm tracking-wider'>
              "Rizwan has proven to be a trusted partner in talent acquisition." <br />Product Manager
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${microsoft})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className= 'text-white text-sm tracking-wider'>
              "Rizwan worked closely to effortlessly source top-tier talent." <br />TA Specialist
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${monzo})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className= 'text-white text-sm tracking-wider'>
              "It was the first time using Create Jobs for our recruitment, it certainly won't be the last." <br />Project Manager
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${danone})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className= 'text-white text-sm tracking-wider'>
              "Create demonstrated a deep understanding of our industry." <br />Head of Data Science 
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${zalando})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className= 'text-white text-sm tracking-wider'>
              "Highly proficient in their recruitment competence during a pressurised acquisition drive " <br />Senior Architect
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cisco})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className= 'text-white text-sm tracking-wider'>
              "Rizwan's expertise and professionalism is unmatched. Thank you!" <br />Engineering Manager
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${aliexpress})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className= 'text-white text-sm tracking-wider'>
              "Efficient, effective, and always deliver results." <br />Talent Acquisition Manager
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cognizant})` }}
            className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className= 'text-white text-sm tracking-wider'>
              "Create have become an invaluable extension of our team." <br />Head of Data Science
              </span>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Companies;