import React, { useState, useRef, useEffect } from 'react'
import Loader from './components/Loader'

import Homepage from './pages/Homepage.jsx'
import Skills from './pages/Skills.jsx'
import Project from './pages/Project.jsx'
import Certification from './pages/Certification.jsx'
import Contactme from './pages/Contactme.jsx'

import gsap from 'gsap'

const App = () => {
  const [loading, setLoading] = useState(true)
  const cursorRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.15,
        ease: "power1.out",
      })
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div>
          <div ref={cursorRef} className="fixed top-0 left-0 h-8 w-8 bg-purple-300 rounded-full z-9999 pointer-events-none"></div>
          <Homepage />
          <Skills />
          <Project />
          <Certification />
          <Contactme />
        </div>
      )}
    </>
  )
}

export default App
