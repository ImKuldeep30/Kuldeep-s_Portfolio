import React from 'react'
import Img_container from './Img_container'

const Stack = (props) =>{

  const isize = 'w-8 h-8';
  const tsize = 'text-xl';

  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr_3fr] my-8 overflow-hidden px-[7%] gap-10'>
        <div className='text-white font-semibold text-2xl flex items-center py-2'>{props.item}</div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-1 '>
          {props.data.map((item,indx) => (
            <Img_container image={item.image} text={item.text} imgSize={isize} textSize={tsize}/>
          ))}     
        </div>
    </div>
  )
}

export default Stack