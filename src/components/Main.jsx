import React from 'react'
import videoBg from '../assets/streets.mp4'

const Main = () => {
  return (
    <div name='main' className='w-full h-screen'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted playsInline disablePictureInPicture={true}/>
        <div className="content">
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center'>
        <h1 className='text-6xl sm:text-9xl font-bold text-[#e0b92d]'>
          CALIPHATE
        </h1>
        <p className='pt-2 text-2xl sm:text-5xl font-bold text-[#e0b92d]'>
            LUXURY STREETWEAR
        </p>
        <h1 className='pt-2 text-2xl sm:text-4xl font-bold text-[#8e1f1f]'>
          COMING SOON
        </h1>

      </div>
        </div>
    </div>
  )
}

export default Main