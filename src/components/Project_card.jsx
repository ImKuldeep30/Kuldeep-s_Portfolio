import React from 'react'
import Lib_used from './Lib_used'

const Project_card = (props) => {
  return (
    <div className='bg-white/20 backdrop:blur-2xl hover:scale-105 transition-shadow text-white border border-white rounded-lg h-full p-6'>
        <h1 className='text-center text-lg sm:text-2xl font-semibold mb-3'>{props.value.topic}</h1>
        <p className='text-center text-white/80 mb-4'>{props.value.context}</p>
        <div className='mb-4 flex flex-wrap gap-2'>
            {props.value.tech.map((item,key)=>(
                <Lib_used key={key} data={item}/>
            ))}
        </div>
        <a href={props.value.link} className='inline-block bg-black/30 px-5 py-2 text-sm rounded-xl'>View Project</a>
    </div>
  )
}

export default Project_card