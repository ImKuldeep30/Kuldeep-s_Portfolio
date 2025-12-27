import React from 'react'
import resume from '../assets/resume.pdf'

const Main = () => {

  const download = () =>{
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Kuldeep_Kohli_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
        <div className='w-full min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-8 md:px-16 lg:px-[20%] text-center'>
          <div className='w-full'>
      <h1 className='text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-10'>COMPUTER SCIENCE</h1>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold px-2'>ENGINEER</h1>
      <p className='text-base sm:text-lg lg:text-xl text-white mt-6 leading-7 sm:leading-8 lg:leading-9'>Hi! I'm <span className='font-semibold text-red-200'>Kuldeep Kohli</span>, a passionate computer science enthusiast with a strong interest in software development, artificial intelligence, and web technologies. Currently pursuing a BTech in Computer Science and Engineering, I am dedicated to building innovative solutions that address real-world problems.</p>
            <div className='mt-8'>
              <button className='w-auto h-auto text-red-200 border-white border rounded-xl py-1 px-3 font-semibold hover:scale-110' onClick={download}>Download Resume</button>
            </div>
          </div>
    </div>
  )
}

export default Main