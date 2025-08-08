import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Timeline() {
  useGSAP(() => {
    // Create a GSAP timeline with default duration and easing for all animations
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } });

    // Animate Box 1:
    // from scale 0.5, red color, no rotation
    // to scale 1.5, blue color, 360 degrees rotation
    tl.fromTo(
      ".box-1",
      { scale: 0.5, backgroundColor: "red", rotation: 420 },
      { scale: 1.5, backgroundColor: "blue", rotation: 360 }
    )
    // Then animate Box 1 further:
    // scale back to 1, change to purple, rotate another full circle (720 degrees total)
    .to(".box-1", {
      scale: 1,
      backgroundColor: "purple",
      rotation: 720,
      duration: 1.5, // override default duration for this animation
    });

    // Animate Box 2:
    // Move from left (-200 x) to right (200 x), change background from orange to green
    tl.fromTo(
      ".box-2",
      { x: -200, y: 0, opacity: 1, backgroundColor: "orange" },
      { x: 200, y: 0, backgroundColor: "green" }
    )
    // Then move Box 2 down 100 pixels and change background to yellow
    .to(".box-2", {
      y: 100,
      backgroundColor: "yellow"
    })
    // Fade Box 2 partially out (opacity 0.5) over 0.8 seconds
    .to(".box-2", {
      opacity: 0.5,
      duration: 0.8
    });

    // Animate Box 3:
    // Fade and scale up from invisible and tiny to fully visible and normal size
    tl.fromTo(
      ".box-3",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, ease: "elastic.out(1, 0.5)" }
    )
    // Rotate Box 3 full circle while moving up 50px with a bounce ease
    .to(".box-3", {
      rotation: 360,
      y: -50,
      ease: "bounce.out"
    })
    // Move Box 3 back down to original position with bounce ease
    .to(".box-3", {
      y: 0,
      ease: "bounce.in"
    });

  }, []);

  return (
    <div className="bg-dark p-5">
      <section>
        <div className="box-1">box-1</div>
        <div className="box-2">box-2</div>
        <div className="box-3">box-3</div>
      </section>
    </div>
  );
}

export default Timeline;
