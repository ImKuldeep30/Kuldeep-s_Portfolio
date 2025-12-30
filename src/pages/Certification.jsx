import React from 'react'
import Certificate_tab from '../components/Certificate_tab'

const Certification = () => {
  return (
    <>
    <section id='certification'>
      <div className='min-h-screen w-full flex justify-center'>
        <div className='w-full max-w-5xl mx-auto px-4 sm:px-8'>
          <div className='py-20'>
            <span className='text-white text-2xl sm:text-4xl font-semibold text-center inline-block w-full'>CERTIFICATIONS</span>
          </div>
          <Certificate_tab />
        </div>
      </div>
    </section>
    </>
  )
}

export default Certification