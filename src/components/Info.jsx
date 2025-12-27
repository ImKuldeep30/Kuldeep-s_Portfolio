import React from 'react'
import Img_container from './Img_container'
import SocialLink from './SocialLink'
import Email from './Email'

const Info = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:justify-between gap-6 px-4 sm:px-8 lg:px-20 mt-10">
      <div className="space-y-3">
        <Email />
        <h1 className="grid text-base sm:text-lg lg:text-xl">
          Location
          <span className="text-sm sm:text-base lg:text-lg text-white/80">
            Dehradun, Uttarakhand, India
          </span>
        </h1>
      </div>

      <div className="flex gap-4 mt-4 md:hidden flex-wrap justify-center">
        <SocialLink />
      </div>

      <div className="hidden md:flex flex-col gap-2">
        <SocialLink />
      </div>
    </div>
  )
}

export default Info
