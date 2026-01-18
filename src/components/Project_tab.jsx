import React, { useLayoutEffect, useRef } from 'react'
import Project_card from './Project_card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Project_tab = () => {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card-wrapper", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const data = [
    {
      topic:'Student management System',
      context:'A comprehensive student management platform with features like attendance management, student details tracking, and data management.',
      tech:['Python','My SQL'],
      link:'https://github.com/ImKuldeep30/student-management-system.git'
    },
    {
      topic:'MapMate travel planning website',
      context:'Plan, organize and explore your journeys with ease. From planning trips to finding hidden gems around the world,MapMate is here to make every trip unforgettable.',
      tech:['HTML','CSS','NodeJs'],
      link:'https://github.com/ImKuldeep30/MapMate-your-travel-planner.git'
    },
    {
      topic:'Flight Reservation website',
      context:'A database-driven flight reservation system that enables real-time booking, secure payments, and efficient flight and customer data management.',
      tech:['React','Tailwind','My SQL','NodeJs'],
      link:'https://github.com/MeSarthak/flight-reservation.git'
    },
    {
      topic:'AI powered process scheduler',
      context:'AI Powered Process Scheduler is a web-based CPU scheduling simulator for FCFS, SJF, and Round Robin, featuring real-time execution, Gantt chart visualization, and AI-based algorithm recommendations.',
      tech:['Python','Flask','JavaScript','HTML','CSS'],
      link:'https://github.com/ImKuldeep30/AI-powered-process-scheduler.git'
    }
  ]

  return (
    <div ref={containerRef} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
      {data.map((items, indx) =>(
        <div key={indx} className='project-card-wrapper h-full'>
            <Project_card value={items}/>
        </div>
      ))}
    </div>
  )
}

export default Project_tab
