import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-4 sticky top-0 uppercase font-extrabold text-purple-200 shadow-md bg-gradient-to-r from-purple-800 to-purple-400">
      <a href="/" className="mr-4 text-purple-400">
        Movie search
      </a>
    </nav>
  );
};

export default Navbar;
