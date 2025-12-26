import React from 'react'
import Info from '../components/Info'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <section id='contact'>
    <div className='w-full min-h-screen bg-[#151618] py-[5%] flex justify-center text-white'>
      <div className='py-[25%] lg:py-0 w-[90%]'>
        <h1 className='text-4xl font-semibold py-[5%] text-center'>CONTACT</h1>
        <span className='text-xl py-2 text-center w-full inline-block'>Connect with me</span>
        <p className='px-[20%] text-xl text-center'>
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