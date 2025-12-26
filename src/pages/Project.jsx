import React from 'react'
import Project_tab from '../components/Project_tab'
const Project = () => {
  return (
    <>
    <section id='project'> 
      <div className="w-full min-h-screen bg-[#151618] flex justify-center">
        <div className=' min-h-screen  w-[90%]'>
          <div className='py-[15%] md:py-[10%] lg:py-[6%]'>
            <span className='text-white text-4xl font-semibold text-center inline-block w-full' >PROJECTS</span>
          </div>
          <Project_tab />
        </div>
      </div>
    </section>
    </>
  )
}

export default Project