import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import "./App.css";

gsap.registerPlugin(SplitText);

function Dashboard() {
 
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">

    </div>
  );
}

export default Dashboard;
