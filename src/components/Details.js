import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Details = ({details}) => {
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
    <div className={`w-full rounded-md relative p-8 border-2 custom-scrollbar shadow-md ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-neutral-200"} `}
    style={{color:"gray",overflow:"auto"}}
    >
      <h1 className="text-lg xl:text-2xl" style={{padding:"10px"}} >Details</h1>
      <ul className={`w-full h-full flex flex-col justify-between divide-y-1 text-sm ${darkMode?"divide-gray-800":null}`} >
        {
          Object.keys(detailsList).map((item)=>{
            return <li key={item} className="flex-1 flex justify-between items-center" 
            style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
              <span className="w-50" >{detailsList[item]}</span>
              <span className="w-50"  >{item==="marketCapitalization"?`${convertMillionToBillion(details[item])}B`: details[item]}</span>
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default Details;
