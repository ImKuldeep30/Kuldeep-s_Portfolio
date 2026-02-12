import React, { useState, useRef, useEffect } from 'react'
import Loader from './components/Loader'
import Background from './components/Background'

import Homepage from './pages/Homepage.jsx'
import Skills from './pages/Skills.jsx'
import Project from './pages/Project.jsx'
import Certification from './pages/Certification.jsx'
import Contactme from './pages/Contactme.jsx'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css' // Import lenis css if needed, though mostly it's JS based now but checking documentation, usually not strictly required for v1+ unless specific styles needed.
// Just in case, 'lenis' package might not expose css directly in older versions, but let's check.
// Actually standard lenis import is enough for logic.

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const [loading, setLoading] = useState(true)
  const cursorRef = useRef(null)

  useEffect(() => {
    // Lenis Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Cursor Animation
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.15,
        ease: "power1.out",
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="min-h-screen text-white relative">
          <Background />

          {/* Custom Cursor */}
          <div ref={cursorRef} className="fixed top-0 left-0 h-6 w-6 bg-purple-400 mix-blend-difference rounded-full z-9999 pointer-events-none hidden md:block"></div>

          <div className="relative z-10">
            <Homepage />
            <Skills />
            <Project />
            <Certification />
            <Contactme />
          </div>
        </div>
      )}
    </>
  )
}

export default App
