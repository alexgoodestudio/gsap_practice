import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function TimelineBox() {
  const boxRef = useRef();

  useGSAP(() => {
    gsap.to(boxRef.current, {
      keyframes: [
        { x: 100, duration: 0.85 }, // move right
        { y: 100, duration: 0.85 }, // move down
        { x: 0, duration: 0.85 },   // move left
        { y: 0, duration: 0.85 }    // move up
      ],
      ease: "power1.inOut",
      repeat: -1
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div
        ref={boxRef}
        className="w-20 h-20 bg-blue-500 text-white flex items-center justify-center font-bold rounded"
      >
        Box
      </div>
    </div>
  );
}

export default TimelineBox;
