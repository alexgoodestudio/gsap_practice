import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function From() {
  useGSAP(() => {
    // Animate each box from off-screen and transparent
    gsap.from(".box-1", {
      x: 400,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".box-2", {
      y: 900,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "back.out(1.7)"
    });

    gsap.from(".box-3", {
      x: -200,
      opacity: 0,
      duration: 2,
      delay: 1,
      ease: "elastic.out(1, 0.3)"
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

export default From;
