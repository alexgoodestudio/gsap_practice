import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function SplitEntranceText() {
  const container = useRef();

  useGSAP(() => {
    const [topLine, bottomLine] = gsap.utils.toArray('.line');

    gsap.from(topLine, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(bottomLine, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.3,
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen flex flex-col justify-center items-center text-center space-y-4">
      <h1 className="text-4xl font-bold line">Top Line of Text</h1>
      <h2 className="text-2xl text-gray-600 line">Bottom Line of Text</h2>
    </div>
  );
}

export default SplitEntranceText;
