import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText as GSTSplitText } from "gsap/SplitText";

// Don't forget to register the plugin
gsap.registerPlugin(GSTSplitText);

function SplitText() {
  // Create a ref to target the text element
  const textRef = useRef(null);

  useEffect(() => {
    // Create a SplitText instance, splitting the text into characters and words
    const split = new GSTSplitText(textRef.current, {
      type: "words,chars"
    });

    // Animate characters from opacity 0 and y offset, staggering each for a wave effect
    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05, // Delay between each char animation
      ease: "power2.out"
    });

    // Cleanup function to revert DOM to original state when component unmounts
    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="bg-dark vh-100 w-100 p-5" style={{ color: "white", fontSize: "2rem", margin: "auto" }}>
      {/* This text will be split and animated */}
      <p ref={textRef}>
        Welcome to GSAP SplitText animation!
      </p>
    </div>
  );
}

export default SplitText;
