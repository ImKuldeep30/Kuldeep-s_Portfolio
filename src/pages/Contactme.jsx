import React from 'react'
import Info from '../components/Info'
import Footer from '../components/Footer'

const About = () => {
  return (
    <section id="contact">
    <div className="w-full min-h-screen bg-[#151618] flex justify-center text-white px-4 sm:px-8 lg:px-20 py-12 lg:py-12">
      <div className="w-full max-w-5xl py-8 lg:py-12">
        <h1 className="font-semibold text-center text-2xl sm:text-3xl lg:text-4xl mb-4">
          CONTACT ME
        </h1>
        <p className="text-center text-sm sm:text-base lg:text-xl leading-relaxed px-4 sm:px-8 lg:px-0">
          Feel free to reach out to me for any inquiries, collaborations, or professional opportunities.
          I am always open to meaningful discussions around new projects, innovative ideas, and potential partnerships.
          Let’s connect and explore how we can work together to create impactful solutions.
        </p>
        <Info />
        <Footer />
      </div>
    </div>
    </section>
  )
}

export default About
