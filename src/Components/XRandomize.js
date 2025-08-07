import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef,useState } from "react";


function X_Randomize(){
    const [endX, setEndX] = useState(0);
    const boxRef= useRef();
    const container = useRef();
    const randomX= gsap.utils.random(-200, 200, 1, true);

    useGSAP(()=>{
        gsap.to(boxRef.current, {
            x: endX,
            duration:1
        })
    },[endX])

    return(
        <div ref={container}>
            <button onClick={()=> setEndX(randomX())} className="btn btn-secondary ">Pass in Random Value</button>
            <div className="bg-primary text-dark " ref={boxRef}>{endX}</div>
        </div>
    )
}

export default X_Randomize;