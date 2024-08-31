import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const PriceInfo = ({details,totalTradedValue,totalTradedShares}) => {
  const {darkMode}=useContext(ThemeContext);
  const detailsList ={
    name:"Name",
    country:"Country",
    currency:"Currency",
    exchange:"Exchange",
    ipo:"IPO Date",
    marketCapitalization:"Market Capitalization",
    finnhubIndustry:"Industry",
  }
  const convertMillionToBillion=(number)=>{
    return (number/1000).toFixed(2);
  }
  return (
    <div className={`w-full card rounded-md relative p-8 border-2 custom-scrollbar shadow-md ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-neutral-200"} `}
    style={{color:"gray",overflow:"auto"}}
    >
      <h1 className="text-2xl" style={{padding:"10px"}} >Price Information ( for above table )</h1>
      <ul className={`w-full h-full flex flex-col justify-between divide-y-1 text-sm ${darkMode?"divide-gray-800":null}`} >
        <li className="flex-1 flex justify-between items-center" 
          style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
          <span className="w-50" >Traded Volume ( Lakhs )</span>
          <span className="w-50"  >{totalTradedShares}</span>
        </li>
        <li className="flex-1 flex justify-between items-center" 
          style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
          <span className="w-50" >Traded Value ( ₹Cr. )</span>
          <span className="w-50"  >{totalTradedValue}</span>
        </li>
        <li className="flex-1 flex justify-between items-center" 
          style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
          <span className="w-50" >Outstanding shares(Last Day) </span>
          <span className="w-50"  >{details[details?.length-1]?.Turnover/details[details?.length-1]?.Vwap}</span>
        </li>
        <li className="flex-1 flex justify-between items-center" 
          style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
          <span className="w-50" > Total Market CapI (Last Day) ( ₹Cr. )</span>
          <span className="w-50"  >{(details[details?.length-1]?.Turnover/details[details?.length-1]?.Vwap)*details[details?.length-1]?.Close}</span>
        </li>
        <li className="flex-1 flex justify-between items-center" 
          style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
          <span className="w-50" >Impact Cost</span>
          <span className="w-50"  >0.02</span>
        </li>
        <li className="flex-1 flex justify-between items-center" 
          style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
          <span className="w-50" >% of Deliverable (Last Day)</span>
          <span className="w-50"  >{((details[details?.length-1]?.percentageDeliverable)*100).toFixed(2)}%</span>
        </li>
      </ul>
    </div>
  );
};

export default PriceInfo;
