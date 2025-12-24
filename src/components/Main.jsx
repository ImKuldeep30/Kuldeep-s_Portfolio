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
    <div className='w-full min-h-screen px-[20%] py-[40%] lg:py-[15%] '>
        <h1 className=' text-white text-5xl font-extrabold px-2 mt-10' >COMPUTER SCIENCE</h1>
        <h1 className='text-5xl text-white font-extrabold px-2'>ENGINEER</h1>
        <p className='text-xl text-white mt-6 leading-[1.9]' >Hi! I'm <span className='font-semibold text-red-200'>Kuldeep Kohli</span>, a passionate computer science enthusiast with a strong interest in software development, artificial intelligence, and web technologies. Currently pursuing a BTech in Computer Science and Engineering, I am dedicated to building innovative solutions that address real-world problems.</p>
        <button className='mt-10 w-auto h-auto text-red-200 border-white border rounded-xl pt-1 pb-1 pl-2 pr-2 font-semibold hover:scale-110 ' onClick={download} >Download Resume</button>
    </div>
  )
}

export default Main