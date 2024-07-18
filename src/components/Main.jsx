import React from 'react'
import videoBg from '../assets/videoBg.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>CALIPHATE</h1>
            <p>THE GUIDED</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          <div className='subtitle'>
              <h1>COMING SOON</h1>
              <p>2025</p>
          </div>
        </div>
    </div>
  )
}

export default Main