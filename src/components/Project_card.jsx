import React from 'react'
import Lib_used from './Lib_used'

const Project_card = (props) => {
  return (
    <div className='group relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:border-purple-500/30'>
        
        <h1 className='text-center text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent mb-3'>
            {props.value.topic}
        </h1>
        
        <p className='text-center text-gray-300 text-sm sm:text-base mb-6 leading-relaxed'>
            {props.value.context}
        </p>
        
        <div className='mb-6 flex flex-wrap justify-center gap-2'>
            {props.value.tech.map((item, key)=>(
                <Lib_used key={key} data={item}/>
            ))}
        </div>
        
        <div className="text-center pt-2 mt-auto">
            <a href={props.value.link} target="_blank" rel="noreferrer" className='inline-block px-6 py-2.5 rounded-full bg-white/10 hover:bg-purple-600 border border-purple-500/30 hover:border-purple-400 text-white font-medium transition-all duration-300 transform'>
                View Project
            </a>
        </div>
    </div>
  )
}

export default Project_card