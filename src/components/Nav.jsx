import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Email from './Email'

const Nav = () => {

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
    <div className="w-full h-20 fixed top-0 left-0 z-50 text-white flex justify-between items-center bg-transparent backdrop-blur-md px-20 py-5">
      
      <h1 className="text-2xl font-semibold">
        Portfolio
      </h1>

      <div className="hidden lg:flex w-[40%] justify-between items-center">
        <a href="#home" className="cursor-pointer hover:scale-110 transition-transform">Home</a>
        <a href="#skills" className="cursor-pointer hover:scale-110 transition-transform">Skills</a>
        <a href="#project" className="cursor-pointer hover:scale-110 transition-transform">Project</a>
        <a href="#certification" className="cursor-pointer hover:scale-110 transition-transform">Certifications</a>
        <a href="#contact" className="cursor-pointer hover:scale-110 transition-transform">Contact Me</a>
      </div>

      <div className=" lg:hidden">
        <button onClick={() => setOpen(!open)} className=" text-3xl ">
          ☰
        </button>
      </div>

      {open && (
        <div className="absolute top-20 left-0 w-full h-screen text-2xl bg-black/95 backdrop-blur-lg flex flex-col items-center gap-6 py-20 lg:hidden z-50">
          <a className='' href="#home" onClick={() => setOpen(false)}>HOME</a>
          <a href="#skills" onClick={() => setOpen(false)}>SKILLS</a>
          <a href="#project" onClick={() => setOpen(false)}>PROJECT</a>
          <a href="#certification" onClick={() => setOpen(false)}>CERTIFICATION</a>
          <a href="#contact" onClick={() => setOpen(false)}>CONTACT ME</a>
          <h1 className='text-xl mt-[20%]'>GET IN TOUCH</h1>
          <Email />
        </div>
      )}

    </div>
  )
}

export default Nav
