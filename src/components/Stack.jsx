import React, { useLayoutEffect, useRef } from 'react'
import Img_container from './Img_container'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Stack = (props) =>{

  const isize = 'w-6 h-6 sm:w-8 sm:h-8';
  const tsize = 'text-base sm:text-xl';
  const containerRef = useRef(null)
  const listRef = useRef(null)

  // Duplicate data to ensure we have enough width to scroll
  const extendedData = [...props.data, ...props.data, ...props.data, ...props.data]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const totalWidthPercent = 100; // Moving largely
        const moveX = props.dir === 'right' ? totalWidthPercent : -totalWidthPercent;
        const startX = props.dir === 'right' ? -totalWidthPercent : 0;
        
        // If moving right, we might want to start further left so we don't see blank space
        // For simplicity, let's just move from 0 to -50% or -50% to 0 depending on direction if we had infinite loop.
        // But for scrub:
        // Left: 0 -> -x
        // Right: -x -> 0
        
        gsap.fromTo(listRef.current, 
            { xPercent: props.dir === 'right' ? -50 : 0 },
            {
                xPercent: props.dir === 'right' ? 0 : -50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            }
        )

    }, containerRef)
    return () => ctx.revert()
  }, [props.dir])

  return (
    <div ref={containerRef} className='grid grid-cols-1 md:grid-cols-[1fr_3fr] my-8 overflow-hidden px-4 sm:px-8 lg:px-10 gap-10 items-center'>
      <div className='text-white font-semibold text-lg sm:text-2xl flex items-center py-2 z-10 bg-black/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-lg md:rounded-none px-2 md:px-0'>{props.item}</div>
        
        {/* Mask for the scrolling area */}
        <div className='overflow-hidden w-full relative mask-gradient'> 
            <div ref={listRef} className='flex gap-8 w-fit py-2'>
              {extendedData.map((item,indx) => (
                <div key={indx} className='flex-shrink-0'>
                    <Img_container image={item.image} text={item.text} imgSize={isize} textSize={tsize}/>
                </div>
              ))}     
            </div>
        </div>
    </div>
  )
}

export default Stack