import React, { useState } from 'react'
import Loader from './components/Loader'

import Homepage from './pages/Homepage.jsx'
import Skills from './pages/Skills.jsx'
import Project from './pages/Project.jsx'
import Certification from './pages/Certification.jsx'
import Contactme from './pages/Contactme.jsx'

const App = () => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div>
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
