import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/1">Scroll Boxes</Link>
      <Link to="/2">Timeline Boxes</Link>
      <Link to="/3">Rotate Y Box</Link>
      <Link to="/4">Split Entrance Text</Link>
      <Link to="/5">Motion Path</Link>
      <Link to="/6">X_Randomize</Link>
      <Link to="/7">Scroll Playground</Link>
    </nav>
  );
}

export default Nav;
