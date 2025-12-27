import React from 'react'
import Stack from '../components/Stack'

const Skills = () => {

    const frontarr = [
        {
            image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png',
            text : 'React'
        },
        {
            image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/500px-JavaScript-logo.png',
            text : 'JavaScript'
        },
        {
            image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
            text : 'Tailwind CSS'
        },
        {
            image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png',
            text : 'HTML'
        },
        {
            image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png',
            text : 'CSS'
        }
    ]

    const backarr = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png',
    text: 'Node.js',
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/expressjs.svg',
    text: 'Express.js',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    text: 'Python',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg',
    text: 'Flask',
  },
    ]

    const dbarr = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg',
    text: 'MySQL',
  },
  {
    image: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2415%2FPNG%2F512%2Fmongodb_original_wordmark_logo_icon_146425.png&id=146425&pack_or_individual=pack',
    text: 'MongoDB',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    text: 'PostgreSQL',
  },
    ]

    const toolsarr = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
    text: 'Git',
  },
  {
    image: 'https://w7.pngwing.com/pngs/627/244/png-transparent-docker-logo-logos-logos-and-brands-icon.png',
    text: 'Docker',
  },
    ]

  return (
    <>
    <section id='skills'>
    <div className="w-full lg:h-screen sm:min-h-screen bg-[#151618]">
        <div className='pt-24 lg:pt-16'>
          <span className='inline-block w-full text-center text-white font-semibold text-2xl sm:text-4xl'>TECH STACK</span>
          <div className='py-8 mx-auto w-full max-w-5xl px-4 sm:px-8 lg:px-20'>
            <Stack item='FRONTEND' data={frontarr}/>
            <Stack item='BACKEND' data={backarr}/>
            <Stack item='DATABASE' data={dbarr}/>
            <Stack item='TOOLS' data={toolsarr}/>
          </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Skills