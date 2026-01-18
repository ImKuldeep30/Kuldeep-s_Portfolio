import React, { useRef, useState, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Loader = ({ onFinish }) => {
  const loaderRef = useRef(null)
  const counterRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Counter animation logic
    const duration = 2000 // 2 seconds
    const intervalTime = 20
    const steps = duration / intervalTime
    const increment = 100 / steps

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onFinish
    })

    // Wait until counter finishes (approx 2.2s including delay/easing)
    // We synchronize roughly with the React state update or forced delay
    
    tl.to(".counter-text", {
        opacity: 0,
        delay: 2.2, // Wait for count to reach 100
        duration: 0.5
    })

    // Curtain Reveal
    tl.to(loaderRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut"
    })

  }, [])

  return (
    <div ref={loaderRef} className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="counter-text text-white font-bold text-6xl sm:text-8xl md:text-9xl tracking-tighter tabular-nums selection:bg-purple-500 selection:text-white">
        {Math.round(count)}%
      </div>
    </div>
  )
}

export default Loader
