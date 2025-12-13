import React, { useContext } from 'react'
import { MdOutlineLeaderboard } from "react-icons/md";
import ThemeContext from '../context/ThemeContext';

const Footer = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <footer className={`w-full transition-colors duration-300 border-t ${darkMode ? "bg-neutral-900 border-neutral-800 text-gray-400" : "bg-white border-indigo-100 text-gray-600"}`}>
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between gap-12">
                <div className='flex flex-col gap-4 max-w-sm'>
                    <div className="flex items-center gap-3 text-indigo-500">
                        <MdOutlineLeaderboard size={32} />
                        <span className="text-2xl font-bold tracking-tight">MS</span>
                    </div>
                    <p className="text-sm opacity-80 leading-relaxed">
                        Learn from the market's past to build a smarter future.
                        Our platform provides comprehensive data analysis tools for the Nifty-50 index.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
                    <div className='flex flex-col gap-4'>
                        <h3 className={`font-bold text-sm tracking-wider uppercase ${darkMode ? "text-gray-200" : "text-gray-900"}`}>Company</h3>
                        <div className="flex flex-col gap-2 text-sm">
                            <span className="hover:text-indigo-500 cursor-pointer transition">Privacy Policy</span>
                            <span className="hover:text-indigo-500 cursor-pointer transition">Terms of Use</span>
                            <span className="hover:text-indigo-500 cursor-pointer transition">Disclaimer</span>
                            <span className="hover:text-indigo-500 cursor-pointer transition">Contact Us</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h3 className={`font-bold text-sm tracking-wider uppercase ${darkMode ? "text-gray-200" : "text-gray-900"}`}>Resources</h3>
                        <div className="flex flex-col gap-2 text-sm">
                            <span className="hover:text-indigo-500 cursor-pointer transition">Blog</span>
                            <span className="hover:text-indigo-500 cursor-pointer transition">Widgets</span>
                            <span className="hover:text-indigo-500 cursor-pointer transition">FAQ</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`py-6 text-center text-xs border-t ${darkMode ? "border-neutral-800" : "border-gray-100"}`}>
                &copy; {new Date().getFullYear()} MS Stock Screeners. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer
