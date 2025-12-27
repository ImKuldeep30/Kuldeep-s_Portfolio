import React from 'react'

const Certificate_card = (props ,key) => {
    
  return (
    <div className='bg-white/20 text-white border-white rounded-lg h-full p-6'>
        <h1 className='text-xl font-semibold text-center pb-4 '>{props.value.name}</h1>
        <img src={props.value.image} alt="certificate" className='h-auto w-full md:h-auto md:w-full object-contain'/>
        <a href={`${props.value.link}`} className='pt-4 inline-block w-full text-center'>
            <span className='bg-gray-500 rounded-lg px-4 py-1'>View</span>
        </a>
    </div>
  )
}

export default Certificate_card