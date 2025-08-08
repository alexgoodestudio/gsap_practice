import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function FromTo() {
  useGSAP(() => {
    // Box 1: Start small & red, end big & blue
    gsap.fromTo(
      ".box-1",
      { scale: 0.5, backgroundColor: "red" }, // START
      { scale: 1.5, backgroundColor: "blue", duration: 1.5, ease: "power2.inOut" } // END
    );

    // Box 2: Start rotated & off to left, end straight & centered
    gsap.fromTo(
      ".box-2",
      { x: -300, rotation: -90 },
      { x: 0, rotation: 0, duration: 1.5, ease: "bounce.out", delay: 0.5 }
    );

    // Box 3: Start invisible & tiny, end visible & normal size
    gsap.fromTo(
      ".box-3",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)", delay: 1 }
    );
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

export default FromTo;
