import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Email from './Email'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Nav = () => {

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from("#hero",{
      y:-30,
      duration:0.4,
      delay:2.2,
      opacity: 0,
      ease:"elastic"
    })
    tl.from("#links a",{
      duration:0.4,
      opacity: 0,
      stagger: 0.08
    })
  })

  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);


  return (
    <div className="w-full fixed top-0 left-0 z-50 text-white flex justify-between items-center bg-transparent backdrop-blur-md px-4 sm:px-6 md:px-8 lg:px-20 py-3 h-16 sm:h-20">
      
      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold" id='hero'>
        Portfolio
      </h1>

      <div className="hidden lg:flex lg:w-2/5 justify-between items-center" id='links'>
        <a href="#home" className="cursor-pointer  text-sm lg:text-base hover:scale-125 hover:text-purple-700 transition-transform">Home</a>
        <a href="#skills" className="cursor-pointer text-sm lg:text-base  hover:scale-125 hover:text-purple-700 transition-transform">Skills</a>
        <a href="#project" className="cursor-pointer text-sm lg:text-base  hover:scale-125 hover:text-purple-700 transition-transform">Project</a>
        <a href="#certification" className="cursor-pointer text-sm lg:text-base  hover:scale-125 hover:text-purple-700 transition-transform">Certifications</a>
        <a href="#contact" className="cursor-pointer text-sm lg:text-base  hover:scale-125 hover:text-purple-700 transition-transform">Contact Me</a>
      </div>

      <div className=" lg:hidden" id="hero">
        <button onClick={() => setOpen(!open)} className="text-2xl sm:text-3xl ">
          ☰
        </button>
      </div>

      {open && (
          <div className="absolute top-16 sm:top-20 left-0 w-full h-screen bg-black/95 backdrop-blur-lg flex flex-col items-center gap-6 py-20 text-lg sm:text-xl lg:hidden z-50">
            <a className='' href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#project" onClick={() => setOpen(false)}>Project</a>
            <a href="#certification" onClick={() => setOpen(false)}>Certifications</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact me</a>
            <h1 className='mt-12 sm:mt-20 text-base sm:text-lg'>GET IN TOUCH</h1>
            <Email />
          </div>
      )}

    </div>
  )
}

export default Nav
