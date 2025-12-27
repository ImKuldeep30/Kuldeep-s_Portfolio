import React, { useState } from 'react'

const Email = () => {
  const email = 'kuldpkohli2003@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="grid gap-1 py-3 text-base sm:text-lg lg:text-xl">
      <span className="font-medium">Email</span>
      <span onClick={handleCopy} className="text-red-200 cursor-pointer relative inline-block text-sm sm:text-base lg:text-lg group hover:scale-105 transition-transform">
        {email}
        <span className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs sm:text-sm px-2 py-1 rounded transition whitespace-nowrap ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          {copied ? 'Copied!' : 'Copy'}
        </span>
      </span>
    </div>
  )
}

export default Email
