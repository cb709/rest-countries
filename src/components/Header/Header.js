import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="index.html">
            REST COUNTRIES
          </a>
          <input
            className="w-auto form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
