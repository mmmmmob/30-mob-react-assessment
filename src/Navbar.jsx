import React from "react";

const NavBar = () => {
  return (
    <div className="navbar sticky top-0 left-0 right-0 text-slate-900 bg-blue-400 dark:bg-blue-950 dark:text-slate-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          JSD6 : React Assessment
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="owner">Owner</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
