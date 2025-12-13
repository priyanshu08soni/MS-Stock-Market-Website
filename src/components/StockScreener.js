import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { mockSearchResults } from "../sample-data/mock";
import { Search, Filter, TrendingUp } from "lucide-react";

const StockScreener = () => {
    const { darkMode } = useContext(ThemeContext);
    const { setStockSymbol } = useContext(StockContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState("ALL");
    const [filteredStocks, setFilteredStocks] = useState(mockSearchResults.result);

    // Extract unique industries
    const industries = ["ALL", ...new Set(mockSearchResults.result.map((stock) => stock.Industry))];

    useEffect(() => {
        const results = mockSearchResults.result.filter((stock) => {
            const matchesSearch =
                stock.Symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                stock["Company Name"].toLowerCase().includes(searchTerm.toLowerCase());
            const matchesIndustry =
                selectedIndustry === "ALL" || stock.Industry === selectedIndustry;
            return matchesSearch && matchesIndustry;
        });
        setFilteredStocks(results);
    }, [searchTerm, selectedIndustry]);

    return (
        <div
            className={`rounded-2xl p-6 h-full flex flex-col shadow-md backdrop-blur-md ${darkMode
                ? "bg-slate-800/50 text-gray-100"
                : "bg-white text-gray-800"
                }`}
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="text-indigo-500" size={24} />
                    Market Screeners
                </h2>
                <span className="text-xs font-mono px-2 py-1 rounded bg-indigo-500/20 text-indigo-500">
                    {filteredStocks.length} Results
                </span>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className={`relative flex-1 rounded-xl transition-all ${darkMode ? "bg-slate-700/50" : "bg-gray-100"
                    }`}>
                    <Search className={`absolute left-3 top-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`} size={20} />
                    <input
                        type="text"
                        placeholder="Search symbol or company..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-transparent outline-none rounded-xl"
                    />
                </div>

                <div className="relative">
                    <Filter className={`absolute left-3 top-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`} size={20} />
                    <select
                        value={selectedIndustry}
                        onChange={(e) => setSelectedIndustry(e.target.value)}
                        className={`pl-10 pr-8 py-2.5 rounded-xl appearance-none outline-none cursor-pointer w-full md:w-48 transition-all ${darkMode ? "bg-slate-700/50 text-gray-100" : "bg-gray-100 text-gray-800"
                            }`}
                    >
                        {industries.map((industry) => (
                            <option key={industry} value={industry}>
                                {industry}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Stock Grid */}
            <div className={`flex-1 overflow-y-auto custom-scrollbar ${darkMode ? "custom-scrollbar-dark" : ""} pr-2 space-y-3`}>
                {filteredStocks.map((stock) => (
                    <div
                        key={stock.Symbol}
                        onClick={() => setStockSymbol(stock.Symbol)}
                        className={`group p-4 rounded-xl cursor-pointer transition-all hover:-translate-y-1 ${darkMode
                            ? "bg-slate-700/30 hover:bg-indigo-900/20"
                            : "bg-gray-50 hover:bg-indigo-50"
                            }`}
                    >
                        <div className="flex justify-between items-start mb-1">
                            <span className="font-bold text-lg tracking-wide">{stock.Symbol}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${darkMode ? "bg-slate-700 text-gray-300" : "bg-gray-200 text-gray-600"
                                }`}>
                                {stock.Industry}
                            </span>
                        </div>
                        <div className={`text-sm truncate ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {stock["Company Name"]}
                        </div>
                    </div>
                ))}

                {filteredStocks.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No stocks found matching your criteria.
                    </div>
                )}
            </div>
        </div >
    );
};

export default StockScreener;
