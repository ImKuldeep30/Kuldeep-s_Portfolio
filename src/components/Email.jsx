import React from 'react'
import { useState } from 'react'

const Email = () => {

    const email = 'kuldpkohli2003@gmail.com'
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

  return (
    <h1 className='text-xl grid py-3'>
        Email 
        <span onClick={handleCopy} className='text-red-200 cursor-pointer relative w-fit group hover:scale-105'>
            kuldpkohli2003@gmail.com
            <span className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded transition whitespace-nowrap ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            >
            {copied ? 'Copied!' : 'Copy'}
            </span>
        </span>
    </h1>
  )
}

export default Email