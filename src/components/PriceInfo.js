import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const PriceInfo = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`rounded-2xl h-full transition-colors duration-300 bg-transparent`}>
      <div className="space-y-3">
        {[
          { label: "Upper Band", value: (details[0]?.pclose * 1.1).toFixed(2) },
          { label: "Lower Band", value: (details[0]?.pclose * 0.9).toFixed(2) },
          { label: "Price Band", value: "No Band" }
        ].map((item, index) => (
          <div key={index} className={`flex justify-between items-center p-3 rounded-xl transition ${darkMode ? "bg-white/5 hover:bg-white/10" : "bg-gray-50 hover:bg-indigo-50"}`}>
            <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{item.label}</span>
            <span className={`font-mono font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceInfo;
