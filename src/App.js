import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Dashboard from "./Components/Dashboard";
import ScrollBoxes from "./Components/ScrollBoxes";
import TimelineBox from "./Components/TimelineBox";
import RotateYBox from "./Components/RotateYBox";
import SplitEntranceText from "./Components/SplitEntranceText";
import MotionPath from "./Components/MotionPath";

function App() {
  return (
    <Router>
      <Nav />
      <div className="">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/1" element={<ScrollBoxes />} />
          <Route path="/2" element={<TimelineBox />} />
          <Route path="/3" element={<RotateYBox />} />
          <Route path="/4" element={<SplitEntranceText />} />
          <Route path="/5" element={<MotionPath />}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
