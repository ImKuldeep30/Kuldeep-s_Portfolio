import React, { useEffect, useRef } from 'react'

const Background = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    // Initial resize
    handleResize()
    
    window.addEventListener('resize', handleResize)

    // Particles
    const particlesArray = []
    const numberOfParticles = 150 // Increased count
    const mouse = { x: null, y: null, radius: 150 }

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x
      mouse.y = event.y
    })

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }
      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY

        // Mouse interaction
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 2;
            if (mouse.x > this.x && this.x > this.size * 10) this.x -= 2;
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 2;
            if (mouse.y > this.y && this.y > this.size * 10) this.y -= 2;
        }

        this.x += this.directionX
        this.y += this.directionY
        this.draw()
      }
    }

    function init() {
        particlesArray.length = 0
        for (let i = 0; i < numberOfParticles; i++) {
            let size = Math.random() * 2 + 1; // Slightly smaller sizes (1-3px)
            let x = Math.random() * (window.innerWidth - size * 2 - (size * 2)) + size * 2;
            let y = Math.random() * (window.innerHeight - size * 2 - (size * 2)) + size * 2;
            let directionX = (Math.random() * 2) - 1; 
            let directionY = (Math.random() * 2) - 1; 
            let color = 'rgba(216, 180, 254, 0.4)'; // 40% opacity particles

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function animate() {
        animationFrameId = requestAnimationFrame(animate)
        ctx.clearRect(0,0, window.innerWidth, window.innerHeight)
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update()
        }
        connect()
    }

    function connect() {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                               ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width/7) * (canvas.height/7)) {
                    let opacity = 1 - (distance/20000);
                    ctx.strokeStyle = 'rgba(216, 180, 254, ' + (opacity * 0.2) + ')'; // Max 20% opacity lines
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    init()
    animate()

    return () => {
        window.removeEventListener('resize', handleResize)
        cancelAnimationFrame(animationFrameId) // Clean up animation
    }

  }, [])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 bg-black" />
  )
}

export default Background
