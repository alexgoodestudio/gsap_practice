import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/1">Scroll Trigger Toggle Actions</Link>

    </nav>
  );
}

export default Nav;
