import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function ScrollBoxes() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".scroll-box", {
      y: 200,
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      stagger: 0.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none reverse", // animates in, reverses on scroll back
      },
    });
  }, { scope: container });

  return (
    <div ref={container} className="space-y-16 mt-[300px] px-4">
      <div className="scroll-box bg-cyan-500 p-8 text-white text-xl rounded-xl shadow-lg">🔥 Scroll Box 1</div>
      <div className="scroll-box bg-cyan-600 p-8 text-white text-xl rounded-xl shadow-lg">🚀 Scroll Box 2</div>
      <div className="scroll-box bg-cyan-700 p-8 text-white text-xl rounded-xl shadow-lg">🎯 Scroll Box 3</div>
    </div>
  );
}

export default ScrollBoxes;
