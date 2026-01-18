import React, { useLayoutEffect, useRef } from 'react'
import Info from '../components/Info'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                end: "bottom bottom",
                toggleActions: "play none none reverse"
            }
        })

        tl.from(".contact-title", { y: -50, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(".contact-desc", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
          .from(".contact-info", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
          .from(".contact-footer", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")

    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={containerRef}>
    <div className="w-full min-h-screen flex justify-center text-white px-4 sm:px-8 lg:px-20 py-12 lg:py-12">
      <div className="w-full max-w-5xl py-8 lg:py-12">
        <div className='overflow-hidden'>
            <h1 className="contact-title font-semibold text-center text-2xl sm:text-3xl lg:text-4xl mb-4">
            CONTACT ME
            </h1>
        </div>
        <p className="contact-desc text-center text-sm sm:text-base lg:text-xl leading-relaxed px-4 sm:px-8 lg:px-0">
          Feel free to reach out to me for any inquiries, collaborations, or professional opportunities.
          I am always open to meaningful discussions around new projects, innovative ideas, and potential partnerships.
          Let’s connect and explore how we can work together to create impactful solutions.
        </p>
        <div className="contact-info">
            <Info />
        </div>
        <div className="contact-footer">
            <Footer />
        </div>
      </div>
    </div>
    </section>
  )
}

export default About
