import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './App.css'; 

function RotateYBox() {
  const cardRef = useRef();
  const [clicked, setClicked] = useState(false);

  useGSAP(() => {
    gsap.to(cardRef.current, {
      rotationY: clicked ? 180 : 0, // Flip to 180 or back to 0
      duration: 1,
      ease: "power2.inOut"
    });
  }, [clicked]);

  return (
    <div className="rotate-container">
      <div className="card-wrapper">
        <div
          ref={cardRef}
          onClick={() => setClicked(prev => !prev)}
          className="card py-4 bg-green-500 cursor-pointer"
        >
          Front
        </div>
      </div>
    </div>
  );
}

export default RotateYBox;
