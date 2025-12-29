import React from 'react'
import resume from '../assets/resume.pdf'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'

const Main = () => {

  useLayoutEffect(() => {

    const tl = gsap.timeline()

    tl.from("#CS", {
      y: -100,
      opacity: 0,
      duration:0.5,
      ease: "elastic.out(1, 0.5)"
    })

    tl.from("#eng",{
      y:-100,
      opacity:0,
      ease: "elastic.out(1, 0.5)"
    })

    tl.from("#para",{
      y:-30,
      opacity:0,
      duration:1.2,
      ease:"elastic.out(1, 0.5)"
    })

    tl.from("#btn",{
      y:-100,
      opacity:0,
      ease:"elastic.out(1, 0.5)"
    })

  }, [])

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
        <h1 id="CS" className='text-purple-700 text-3xl sm:text-4xl lg:text-6xl font-extrabold mt-10'>COMPUTER SCIENCE</h1>
        <h1 id="eng" className='text-3xl sm:text-4xl lg:text-6xl text-purple-700 font-extrabold px-2'>ENGINEER</h1>
        <p id='para' className='text-base sm:text-lg lg:text-xl text-white mt-6 leading-7 sm:leading-8 lg:leading-9'>Hi! I'm 
          <span className='font-semibold text-purple-300'> Kuldeep Kohli</span>, a passionate computer science enthusiast with a strong interest in software development, artificial intelligence, and web technologies. Currently pursuing a BTech in Computer Science and Engineering, I am dedicated to building innovative solutions that address real-world problems.
        </p>
        <div id="btn" className='mt-8'>
          <button onClick={download} className="relative overflow-hidden border border-white rounded-xl py-1 px-3 font-semibold  text-white group ">
          <span className=" absolute inset-0 bg-purple-700 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"></span>
            <span className="relative z-10 group-hover:text-black transition-colors">
              Download Resume
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main