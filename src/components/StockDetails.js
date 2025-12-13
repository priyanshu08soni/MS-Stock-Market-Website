import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const StockDetails = ({ details }) => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`rounded-2xl h-full    transition-colors duration-300 bg-transparent`}>
            <h2 className="text-3xl font-bold mb-2 tracking-tight">{details.Symbol}</h2>
            <div className="flex flex-col gap-1">
                <span className={`text-lg font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {details.Company}
                </span>
                <div className="flex items-center gap-3 text-sm mt-2">
                    <span className={`px-3 py-1 rounded-full font-medium ${darkMode ? "bg-indigo-900/30 text-indigo-300" : "bg-indigo-50 text-indigo-600"}`}>
                        {details.Industry}
                    </span>
                    <span className={`px-3 py-1 rounded-full font-medium ${darkMode ? "bg-neutral-800 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
                        {details.Series} • {details.ISIN}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StockDetails
