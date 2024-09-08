import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const PriceInfo = ({details,yearlyHigh,yearlyLow}) => {
  const {darkMode}=useContext(ThemeContext);
  return (
    <div className={`w-full card rounded-md relative p-8 border-2 custom-scrollbar shadow-md ${darkMode?"bg-gray-900 border-gray-800":"bg-blue-100 border-neutral-200"} `}
    style={{color:"gray",overflow:"auto"}}
    >
      <h1 className="text-2xl" style={{padding:"10px"}} >Price Information ( for above table )</h1>
      <ul className={`w-full h-full flex flex-col justify-between divide-y-1 text-sm ${darkMode?"divide-gray-800":null}`} >
        <li className="flex-1 flex justify-between items-center" 
          style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
          <span className="w-50" >52W High ( 04-05-2020 to 30-04-2021 )</span>
          <span className="w-50"  >{yearlyHigh>0?yearlyHigh:""}</span>
        </li>
        <li className="flex-1 flex justify-between items-center" 
          style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
          <span className="w-50" >52W Low ( 04-05-2020 to 30-04-2021 )</span>
          <span className="w-50"  >{yearlyLow!=Infinity?yearlyLow:""}</span>
        </li>
        <li className="flex-1 flex justify-between items-center" 
          style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
          <span className="w-50" >Upper Band </span>
          <span className="w-50"  >{(details[0]?.pclose*(1.1)).toFixed(2)}</span>
        </li>
        <li className="flex-1 flex justify-between items-center" 
          style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
          <span className="w-50" >Lower Band</span>
          <span className="w-50"  >{(details[0]?.pclose*(0.9)).toFixed(2)}</span>
        </li>
        <li className="flex-1 flex justify-between items-center" 
          style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
          <span className="w-50" >Price Band</span>
          <span className="w-50"  >No Band</span>
        </li>
      </ul>
    </div>
  );
};

export default PriceInfo;
