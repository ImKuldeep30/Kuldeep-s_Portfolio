import React from 'react'

const Lib_used = (props) => {
  return (
    <span className='border border-white bg-transparent text-red-300 rounded px-2 py-1 text-xs'>{props.data}</span>
  )
}

export default Lib_used