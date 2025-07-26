import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";

export default function App() {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, { 
      rotation: 160,
      x: 100,
      y: 400,
      duration: 2,
      yoyo: true,
      repeat: 4
    
    });
  }, { scope: boxRef });

    useGSAP(() => {
    gsap.to(textRef.current, { 
      rotation: 90,
      x: 300,
      y: 200,
      duration: 2,
      yoyo: true,
      repeat: 4
    
    });
  }, { scope: textRef });


  

  return (
    <>
    <div
      ref={boxRef}
      className="boxes-container"
    />
    <h1 ref={textRef} className="text-center"> Hello World </h1>
    </>
  );
}
