import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Background = () => {
  const containerRef = useRef(null);
  const ballsRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const balls = ballsRef.current;

    // Mouse tracking
    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    // Initial position
    balls.forEach((ball) => {
      gsap.set(ball, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    });

    // Animation loop
    gsap.ticker.add(() => {
      balls.forEach((ball) => {
        let x = gsap.getProperty(ball, "x");
        let y = gsap.getProperty(ball, "y");

        // Falling
        y += 1.5;

        // Reset if out
        if (y > window.innerHeight) {
          y = -10;
          x = Math.random() * window.innerWidth;
        }

        // Mouse repulsion
        const dx = x - mouse.current.x;
        const dy = y - mouse.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          x += Math.cos(angle) * 3;
          y += Math.sin(angle) * 3;
        }

        gsap.set(ball, { x, y });
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen bg-black z-10 overflow-hidden"
    >
      {[...Array(120)].map((_, i) => (
        <span
          key={i}
          ref={(el) => (ballsRef.current[i] = el)}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
        />
      ))}
    </div>
  );
};

export default Background;
