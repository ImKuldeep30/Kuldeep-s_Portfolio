import React from 'react'
import Info from '../components/Info'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <section id='contact'>
    <div className='w-full min-h-screen bg-[#151618] py-[5%] text-white'>
      <div className='px-[20%] py-[25%] lg:py-0 '>
        <h1 className='text-4xl py-[5%]'>CONTACT</h1>
        <span className='text-xl py-2'>Connect with me</span>
        <p className=' py-[4%] text-xl'>
          Feel free to reach out to me for any inquiries, collaborations, or professional opportunities. I am always open to meaningful discussions around new projects, innovative ideas, and potential partnerships. Let’s connect and explore how we can work together to create impactful solutions.
        </p>
        <Info />
        <Footer />
      </div>
    </div>
    </section>
    </>
  )
}

export default About