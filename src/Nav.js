import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-black px-6 py-4 flex gap-6">
      <Link className="text-white" to="/">Home</Link>
      <Link className="text-white" to="/1">Example 1</Link>
    </nav>
  );
}

export default Nav;
