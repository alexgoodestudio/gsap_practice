import { useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

function MotionPath() {
  const circleRef = useRef(null);
  const pathRef = useRef(null);

  useGSAP(() => {
    // Create the animation and assign it to a variable
    const tween = gsap.to(circleRef.current, {
      duration: 4,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });

    // Attach the helper to the tween (not the element)
    MotionPathHelper.create(tween);
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
      <div className="relative w-[400px] h-[200px]">
        <svg
          viewBox="0 0 400 200"
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M 50 150 C 150 0, 250 200, 350 100"
            stroke="#4ade80"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        <div
          ref={circleRef}
          className="w-10 h-10 rounded-full bg-cyan-400 text-black font-bold flex items-center justify-center absolute"
        >
          🚀
        </div>
      </div>
    </div>
  );
}

export default MotionPath;
