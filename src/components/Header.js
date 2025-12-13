import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { setDarkMode, darkMode } = useContext(ThemeContext);
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 px-8 py-4 flex items-center justify-between backdrop-blur-md border-b border-opacity-10 shadow-sm transition-colors duration-300 ${darkMode ? "bg-neutral-900/80 border-white" : "bg-white/80 border-black"}`}>
        <div className="flex items-center gap-8">
          <div className={`text-2xl font-bold tracking-tighter ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
            Market<span className={darkMode ? "text-white" : "text-gray-900"}>Screeners</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {["Home", "Dashboard", "Docs", "About", "Contact"].map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <NavLink
                  key={item}
                  to={path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-indigo-500 ${isActive
                      ? (darkMode ? "text-white" : "text-black")
                      : (darkMode ? "text-gray-400" : "text-gray-500")
                    }`
                  }
                >
                  {item}
                </NavLink>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div onClick={() => !isDashboard && setDarkMode(!darkMode)} className="cursor-pointer">
            <ThemeIcon />
          </div>
          {/* Mobile Menu Trigger */}
          <div onClick={toggleMenu} className={`md:hidden cursor-pointer flex flex-col gap-1.5 z-50 ${isMenuOpen ? "change" : ""}`}>
            <div className={`w-8 h-0.5 transition-all duration-300 ${darkMode ? "bg-white" : "bg-black"} ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-8 h-0.5 transition-all duration-300 ${darkMode ? "bg-white" : "bg-black"} ${isMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-8 h-0.5 transition-all duration-300 ${darkMode ? "bg-white" : "bg-black"} ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} ${darkMode ? "bg-neutral-900" : "bg-white"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {["Home", "Dashboard", "Docs", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-2xl font-bold transition-transform hover:scale-110 ${isActive
                  ? (darkMode ? "text-indigo-400" : "text-indigo-600")
                  : (darkMode ? "text-white" : "text-gray-800")
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
