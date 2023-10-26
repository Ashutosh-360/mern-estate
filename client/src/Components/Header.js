import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-400 text-white">
      <div>Real Estate</div>
      <div>
        <input className="p-4 rounded-lg text-black" type="text" />
      </div>
      <div className="flex items-center gap-4 ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
}

export default Header;
