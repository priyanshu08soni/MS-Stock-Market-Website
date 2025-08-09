import React, { useContext } from "react";
import { MdOutlineLeaderboard } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { setDarkMode, darkMode } = useContext(ThemeContext);
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  function menuOnClick() {
    document.getElementById("menu-bar")?.classList.toggle("change");
    document.getElementById("nav")?.classList.toggle("change");
    document.getElementById("menu-bg")?.classList.toggle("change-bg");
  }
  return (
    <>
      <header className="flex align-items-center justify-between">
        <div>
          <div id="menu">
            <div id="menu-bar" onClick={menuOnClick}>
              <div id="bar1" className="bar"></div>
              <div id="bar2" className="bar"></div>
              <div id="bar3" className="bar"></div>
            </div>
            <nav class="nav" id="nav">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `navlink ${isActive ? "active-link" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    if (!isDashboard) {
                      setDarkMode(true);
                    }
                  }}
                >
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `navlink ${isActive ? "active-link" : ""}`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/docs"
                    className={({ isActive }) =>
                      `navlink ${isActive ? "active-link" : ""}`
                    }
                  >
                    Documentation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `navlink ${isActive ? "active-link" : ""}`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `navlink ${isActive ? "active-link" : ""}`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <ThemeIcon />
                </li>
              </ul>
            </nav>
          </div>
          <div class="menu-bg" id="menu-bg"></div>
        </div>
        <div className={`z-10 websitename text-blue-700 `}>MS</div>
      </header>
    </>
  );
};

export default Header;
