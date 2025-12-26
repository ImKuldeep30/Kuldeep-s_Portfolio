import React from 'react'
import Project_card from './Project_card'

const Project_tab = () => {

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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
      {data.map((items, index) =>(
        <Project_card value={items}/>
      ))}
    </div>
  )
}

export default Project_tab