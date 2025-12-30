import React from 'react'
import Project_tab from '../components/Project_tab'
const Project = () => {
  return (
    <>
    <section id='project'> 
      <div className="w-full min-h-screen flex justify-center">
        <div className='w-full max-w-5xl mx-auto px-4 sm:px-8'>
          <div className='py-20 md:py-16 lg:py-12'>
            <span className='text-white text-2xl sm:text-4xl font-semibold text-center inline-block w-full'>PROJECTS</span>
          </div>
          <Project_tab />
        </div>
      </div>
    </section>
    </>
  )
}

export default Project