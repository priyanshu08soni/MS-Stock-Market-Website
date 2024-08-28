import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Details from './Details';

const StockDetails = ({details}) => {
    const {darkMode}=useContext(ThemeContext);
    const convertMillionToBillion=(number)=>{
        return (number/1000).toFixed(2);
    }

    return (
        <>
        <div className={`h-full rounded-md relative p-8 border-2 bg-gray-300 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
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
