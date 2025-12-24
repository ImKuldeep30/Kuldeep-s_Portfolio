import React from 'react'
import Img_container from './Img_container'

const Stack = (props) =>{

  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr_3fr] my-8 overflow-hidden'>
        <div className='text-white font-semibold text-5xl flex items-center py-2'>{props.item}</div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-1'>
          {props.data.map((item,indx) => (
            <Img_container image={item.image} text={item.text} />
          ))}     
        </div>
    </div>
  )
}

export default Stack