import React from 'react'
import {useState} from 'react'
import Img_container from './Img_container'
import SocialLink from './SocialLink'
import Email from './Email'

const Info = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between px-[20%]'>
        <div>
          <Email />
          <h1 className='text-xl grid'>Location <span>Dehradun, Uttrakhand, India</span></h1>
        </div>
        <div className="flex gap-4 mt-4 md:hidden overflow-x-auto">
            <SocialLink />
        </div>
        <div className="hidden md:flex flex-col gap-1">
            <SocialLink />
        </div>
    </div>
  )
}

export default Info