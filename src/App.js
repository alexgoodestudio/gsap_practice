import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Dashboard from "./Components/Dashboard";
import To from "./Components/1_To";
import From from "./Components/2_From";
import FromTo from "./Components/3_FromTo";
import Timeline from "./Components/4_Timeline";
import SplitText from "./Components/5_SplitText";


function App() {
  return (
    <Router>
      <Nav />
      <div className="">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/1" element={<To />} />
          <Route path="/2" element={<From/>}/>
          <Route path="/3" element={<FromTo/>}/>
          <Route path="/4" element={<Timeline/>}/>
          <Route path="/5" element= {<SplitText/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
