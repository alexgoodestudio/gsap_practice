import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

function ScrollTriggerToggleActions() {
  
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
  gsap.to(".box-2",{
    x:400,
    rotation:360,
    yoyo:true,
    repeat:-1,
    duration:3
  })
  
  },[])


  return (
    <div className=" bg-dark p-5">
      <section className="">
        <div className="box-1">box-1</div>
        <div className="box-2">box-2</div>
        <div className="box-3">box-3</div>
      </section>
    </div>
  )
}

export default ScrollTriggerToggleActions;