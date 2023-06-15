import React from 'react';
import aboutme from './aboutme.jpg';
// import * as from './App';

const About = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className='bg-black fixed inset-0 opacity-25 backdrop-blur-sm flex justify-center items-center py-60'>
      <div className='w-[600px]'>
        {/* <img src={aboutme} alt='/' /> */}
        <div className='bg-white text-black'>
          <button className='cursor-pointer text-xl text-black'>X</button>
          <p>Hi My name is Tanmoy Si</p>
          <h1>I am a Full Stack Developer</h1>
          <p>I'm a full-stack developer specializing in building exceptional digital experience. Currently, I'm focused on building responsive full-stack web applications.</p>
        </div>
      </div>
    </div>
  )
}

export default About;

