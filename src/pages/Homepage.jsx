import React from 'react'
import Nav from '../components/Nav'
import Main from '../components/Main'

const Homepage = () => {
  return (
    <>
    <section id='home'>
    <div className="w-full min-h-screen bg-black">
        <Nav />
        <div >
          <Main />
        </div>
    </div>
    </section>
    </>
  )
}

export default Homepage