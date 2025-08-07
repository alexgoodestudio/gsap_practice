import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Dashboard from "./Components/Dashboard";
import ScrollTriggerToggleActions from "./Components/ScollTriggerToggleActions";


function App() {
  return (
    <Router>
      <Nav />
      <div className="">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/1" element={<ScrollTriggerToggleActions />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
