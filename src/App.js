import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import "./App.css";

gsap.registerPlugin(SplitText);

export default function App() {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);

  // Animate main box
  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      {
        rotation: 160,
        x: 900,
        y: 400,
        borderRadius: "100%",
        scale: 1,
        backgroundColor: "#dcb0b0ff",
      },
      {
        rotation: 0,
        x: 0,
        y: 0,
        borderRadius: "100%",
        scale: 1,
        backgroundColor: "blue",
        duration: 2,
        yoyo: true,
        repeat: 4,
        ease: "power1.inOut",
      }
    );
  }, { scope: boxRef });

  // Animate main title words
  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "words" });

    gsap.from(split.words, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  }, { scope: textRef });

  // Animate subtitle words
  useGSAP(() => {
    const split = new SplitText(subTextRef.current, { type: "words" });

    gsap.from(split.words, {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 1,
    });
  }, { scope: subTextRef });

  // Floating balls with hover interaction
  useGSAP(() => {
    const balls = gsap.utils.toArray(".ball");

    // Initial float motion
    balls.forEach((ball) => {
      const x = gsap.utils.random(-100, window.innerWidth);
      const y = gsap.utils.random(-100, window.innerHeight);
      const deltaX = gsap.utils.random(-200, 200);
      const deltaY = gsap.utils.random(-200, 200);
      const duration = gsap.utils.random(2, 5);

      gsap.set(ball, { x, y });

      gsap.to(ball, {
        x: `+=${deltaX}`,
        y: `+=${deltaY}`,
        repeat: -1,
        yoyo: true,
        duration,
        ease: "sine.inOut",
      });
    });

    // Mouse interaction
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      balls.forEach((ball) => {
        const rect = ball.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - mouseX;
        const dy = rect.top + rect.height / 2 - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          const moveX = Math.cos(angle) * 100;
          const moveY = Math.sin(angle) * 100;

          gsap.to(ball, {
            x: `+=${moveX}`,
            y: `+=${moveY}`,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* 100 Floating Balls */}
      {[...Array(300)].map((_, i) => (
        <div
          key={i}
          className="ball absolute rounded-full bg-pink-400 w-4 h-4 opacity-80 z-0"
        />
      ))}

      {/* Animated Box */}
      {/* <div
        ref={boxRef}
        className="w-24 h-24 bg-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      /> */}

      {/* Main Title */}
      <h1
        ref={textRef}
        className="text-center text-5xl font-bold mt-20 relative z-20"
      >
        All Trades Studio | GSAP Experimentation
      </h1>

      {/* Subtitle */}
      <p
        ref={subTextRef}
        className="text-center text-2xl mt-4 relative z-20"
      >
        Columbia, South Carolina
      </p>
    </div>
  );
}
