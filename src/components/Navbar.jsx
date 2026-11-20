import React from "react";
import { Link } from "react-router";

function Navbar({ favouriteCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">🍽️ Recipe Book</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/favourites">Favourites ({favouriteCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
