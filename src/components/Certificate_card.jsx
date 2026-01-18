import React from 'react'

const Certificate_card = (props) => {
    
  return (
    <div className='group relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:border-purple-500/30 flex flex-col'>

        <div className='flex-grow flex flex-col justify-center mb-6 overflow-hidden rounded-xl border border-white/10 bg-black/20'>
             <img src={props.value.image} alt={props.value.name} className='w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105'/>
        </div>

        <h1 className='text-lg sm:text-xl font-bold text-center bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent mb-6'>{props.value.name}</h1>
        
        <div className='mt-auto text-center'>
            <a href={`${props.value.link}`} target="_blank" rel="noreferrer" className='inline-block w-full sm:w-auto px-8 py-2.5 rounded-full bg-white/10 hover:bg-purple-600 border border-purple-500/30 hover:border-purple-400 text-white font-medium transition-all duration-300 transform'>
                View Certificate
            </a>
        </div>
    </div>
  )
}

export default Certificate_card