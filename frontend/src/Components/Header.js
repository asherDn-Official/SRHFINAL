import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <NavLink to="/" className="title">
        <img
          className="ImageNavbrsixecontrol"
          src="/images/GrowthRanjithLogo.png"
          alt=""
        />
      </NavLink>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink onClick={() => setMenuOpen(false)} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(false)} to="/aboutus">
            About us
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(false)} to="/sixphase">
            Be the King
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(false)} to="/toolspage">
            Growth Tool
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setMenuOpen(false)}
            to="/superstar-retailer-kit"
          >
            Superstar Retailer Kit
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(false)} to="/join-as-Member">
            Join As Member
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
