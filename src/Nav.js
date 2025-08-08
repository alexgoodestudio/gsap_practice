import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/1">To</Link>
      <Link to="/2">From</Link>
      <Link to="/3">FromTo</Link>
      <Link to="/4">Timeline</Link>
      <Link to="/5">SplitText</Link>

    </nav>
  );
}

export default Nav;
