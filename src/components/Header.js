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
        <div className="pb-4">
          <div id="menu">
            <div id="menu-bar" onClick={menuOnClick}>
              <div
                id="bar1"
                className={`bar ${
                  darkMode ? "bg-blue-700 text-gray-300" : " bg-blue-700"
                } `}
              ></div>
              <div
                id="bar2"
                className={`bar ${
                  darkMode ? "bg-blue-700 text-gray-300" : " bg-blue-700"
                } `}
              ></div>
              <div
                id="bar3"
                className={`bar ${
                  darkMode ? "bg-blue-700 text-gray-300" : " bg-blue-700"
                } `}
              ></div>
            </div>
            <nav class="nav" id="nav">
              <ul>
                <li>
                  <NavLink className="navlink" to="/">
                    Home
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    if (!isDashboard) {
                      setDarkMode(true);
                    }
                  }}
                  className={isDashboard ? "nav-item disabled" : "nav-item"}
                >
                  <NavLink className="navlink" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink" to="/docs">
                    Documentation
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink" to="/contact">
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
        <div className={`z-10 websitename text-blue-700 `}>-MS-</div>
        <div className={`logo flex items-center text-blue-700`}>
          <MdOutlineLeaderboard />
        </div>
      </header>
    </>
  );
};

export default Header;
