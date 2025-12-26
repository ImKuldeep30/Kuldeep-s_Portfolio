import React from 'react'
import Homepage from './pages/Homepage.jsx'
import Skills from './pages/Skills.jsx'
import Project from './pages/Project.jsx'
import Certification from './pages/Certification.jsx'
import Contactme from './pages/Contactme.jsx'

const App = () => {
  return (
    <>
    <div >
      <Homepage />
      <Skills />
      <Project />
      {/* <Certification /> */}
      <Contactme />
    </div>
    </>
  )
}

export default App