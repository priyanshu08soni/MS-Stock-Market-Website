import React, { useContext, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import ThemeContext from "../context/ThemeContext";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-inner ${darkMode ? "bg-neutral-800 border border-neutral-700" : "bg-indigo-100 border border-indigo-200"
        }`}
      aria-label="Toggle theme"
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${darkMode
            ? "translate-x-8 bg-indigo-500 text-white"
            : "translate-x-0 bg-white text-yellow-500"
          }`}
      >
        {darkMode ? <Moon size={14} /> : <Sun size={14} />}
      </div>
    </button>
  );
}

export default ThemeIcon;
