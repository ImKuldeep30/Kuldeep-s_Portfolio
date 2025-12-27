import React from 'react'
import Img_container from './Img_container'

const SocialLink = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/kuldeep-kohli-768ab1293/"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0"
      >
        <Img_container
          image="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg?semt=ais_hybrid&w=740&q=80"
          text="LinkedIn"
          imgSize="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
          textSize="text-sm sm:text-base lg:text-xl"
        />
      </a>

      <a
        href="https://www.instagram.com/kuld_eepkohli_30?igsh=Nnh3ZmNoYzd2ZjMw"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0"
      >
        <Img_container
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
          text="Instagram"
          imgSize="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
          textSize="text-sm sm:text-base lg:text-xl"
        />
      </a>

      <a
        href="https://github.com/ImKuldeep30"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0"
      >
        <Img_container
          image="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          text="GitHub"
          imgSize="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
          textSize="text-sm sm:text-base lg:text-xl"
        />
      </a>
    </>
  )
}

export default SocialLink
