import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import "./Scroll.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const DiagonalRotatedWorm = () => {
  // Reference to the dot element we want to animate
  const dotRef = useRef();
  // Reference to the wrapper element that triggers scroll
  const wrapperRef = useRef();

  // Set up GSAP animation once on mount
  useGSAP(() => {
    gsap.to(dotRef.current, {
      scrollTrigger: {
        // Trigger when wrapper enters viewport
        trigger: wrapperRef.current,
        start: "top top",       // When top of wrapper hits top of viewport
        end: "+=2500",          // Animation duration over 2500px of scrolling
        scrub: true,            // Sync animation progress with scroll position
        markers: true,          // Show scroll markers for debugging
      },
      motionPath: {
        path: "#sPath",         // Animate along this SVG path ID
        align: "#sPath",        // Align dot rotation to path curve
        alignOrigin: [0.5, 0.5],// Center dot on path
      },
      ease: "none",             // Linear easing (no acceleration)
    });
  }, []);

  return (
    <div className="section-1">
      {/* Rotated container with path and dot */}
      <div className="rotated-wrapper" ref={wrapperRef}>
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          className="svg-path"
        >
          <path
            id="sPath"
            d="
              M 0 100
              C 250 0, 500 200, 750 100
              S 1000 200, 1000 100
            "
          />
        </svg>
        {/* Dot moving along path */}
        <div className="dot" ref={dotRef}></div>
      </div>

      {/* Extra space to enable scrolling */}
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default DiagonalRotatedWorm;
