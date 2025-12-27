import React from 'react'

const Img_container = (props) => {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-3 m-1 sm:m-3 px-2 sm:px-3 hover:scale-110 transition'>
      <img src={props.image} alt="img" 
          className={`${props.imgSize || 'w-6 h-6 sm:w-8 sm:h-8'} flex items-center justify-center bg-transparent rounded-lg shadow-2xl`} 
      />
      <span className={`${props.textSize || 'text-base sm:text-2xl'} text-white shadow-2xl`}>{props.text}</span>
    </div>
  )
}

export default Img_container