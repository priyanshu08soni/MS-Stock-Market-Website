import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const TradeInfo = ({ details, totalTradedValue, totalTradedShares }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`rounded-2xl h-full transition-colors duration-300 bg-transparent`}>
      <div className="space-y-3">
        {[
          { label: "Traded Volume (Lakhs)", value: (totalTradedShares / 100000).toFixed(2) },
          { label: "Traded Value (₹Cr.)", value: (totalTradedValue / 10000000).toFixed(2) },
          { label: "Outstanding Shares", value: (details[details?.length - 1]?.Turnover / details[details?.length - 1]?.Vwap).toFixed(0) },
          { label: "Market Cap (₹Cr.)", value: (((details[details?.length - 1]?.Turnover / details[details?.length - 1]?.Vwap) * details[details?.length - 1]?.Close) / 10000000).toFixed(2) },
          { label: "Impact Cost", value: "0.02" },
          { label: "Deliverable %", value: `${((details[details?.length - 1]?.percentageDeliverable) * 100).toFixed(2)}%` }
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

export default TradeInfo;
