import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const StockDetails = ({details}) => {
    const {darkMode}=useContext(ThemeContext);
    return (
        <>
        <div className={`h-full card rounded-md relative p-8 border-2 shadow-md mb-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-blue-100 border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >{details.Symbol}</div>
                <div className='font-bold text-white'>{details.Company} ({details.ISIN})</div>
                <div> {details.Industry} </div>
                <div>{details.Series}</div>
        </div>
        </>
    )
}

export default StockDetails
