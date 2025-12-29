import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Loader = ({ onFinish }) => {
  const loaderRef = useRef(null)
  const wordRef = useRef(null)
  const charsRef = useRef([])

  const text = "KULDEEP KOHLI"

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onFinish
    })

    // 1️⃣ Letters come from bottom one by one
    tl.from(charsRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      stagger: 0.04,
      ease: "power3.out"
    })

    // 2️⃣ Whole word zooms + fades (NOT individual letters)
    tl.to(wordRef.current, {
      scale: 2,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.inOut"
    })

    // 3️⃣ Loader fades out
    tl.to(loaderRef.current, {
      autoAlpha:0,
      duration: 0.5
    })

  }, [])

  return (
    <div ref={loaderRef} className="fixed inset-0 bg-black flex items-center justify-center z-9999">
      <h1 ref={wordRef} className="flex flex-wrap justify-center text-purple-700 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-widest sm:tracking-widest">
        {text.split("").map((char, index) => (
          <span key={index} ref={el => (charsRef.current[index] = el)} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  )
}

export default Loader
