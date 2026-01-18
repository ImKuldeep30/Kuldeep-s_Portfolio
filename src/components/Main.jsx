import React, { useLayoutEffect, useRef } from 'react'
import resume from '../assets/resume.pdf'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Main = () => {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline()

        // Entry Animations (Mask Reveal)
        tl.from(".hero-text", {
            y: "100%",
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.15
        })
        .from("#para", {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=1")
        .from("#btn", {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8")

        // Parallax & Fade Effect
        gsap.to(".main-content", {
            yPercent: 50,
            opacity: 0, // Fade out
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom center", // Fade out halfway through
                scrub: true
            }
        })

    }, containerRef)
    
    return () => ctx.revert()
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
    <div ref={containerRef} className='w-full min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-8 md:px-16 lg:px-[20%] text-center overflow-hidden'>
      <div className='main-content w-full flex flex-col items-center'>
        
        <div className="overflow-hidden mb-2">
            <h1 id="CS" className='hero-text text-purple-700 text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight'>COMPUTER SCIENCE</h1>
        </div>
        
        <div className="overflow-hidden mb-6">
            <h1 id="eng" className='hero-text text-3xl sm:text-5xl lg:text-7xl text-white font-extrabold px-2 tracking-tight'>ENGINEER</h1>
        </div>

        <p id='para' className='text-base sm:text-lg lg:text-xl text-white/80 mt-2 leading-7 sm:leading-8 lg:leading-9 max-w-3xl'>Hi! I'm 
          <span className='font-semibold text-purple-300'> Kuldeep Kohli</span>, a passionate computer science enthusiast with a strong interest in software development, artificial intelligence, and web technologies. Currently pursuing a BTech in Computer Science and Engineering, I am dedicated to building innovative solutions that address real-world problems.
        </p>
        
        <div id="btn" className='mt-10'>
          <button onClick={download} className="relative overflow-hidden border border-white rounded-xl py-2 px-6 font-semibold text-white group">
          <span className="absolute inset-0 bg-purple-700 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"></span>
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