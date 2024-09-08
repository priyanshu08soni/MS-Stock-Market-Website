import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";

const SearchResult = ({ results, setInput,input }) => {
  const { darkMode } = useContext(ThemeContext);
  const {stockSymbol, setStockSymbol } = useContext(StockContext);
  const [newData, setNewData] = useState([]);
  //To update the mapping data we have 
  //create a new data and then update the 
  //state in useEffect
  useEffect(() => {
    let data = [];
    for (let i = 0; i < results.length; i++) {
      if (results[i].Symbol.substr(0, input.length).toLowerCase() === input.toLowerCase()) {
        data.push({ name: results[i].Symbol });
      }
    }
    setNewData(data);
  }, [input,results]);
  return (
    <ul
      className={`border-2 w-full rounded-md overflow-y-scroll my-3 z-10 ${input?"h-24":""} ${
        darkMode
          ? "bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark"
          : "bg-white border-neutral-200 custom-scrollbar"
      }`}
    >
      {newData &&
        newData.map((item) => {
          return (
            <li
              key={item.name}
              className={`cursor-pointer px-4 py-1 m-2 flex items-center justify-between rounded-md ${
                darkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-100"
              }`}
              onClick={() => {
                setStockSymbol(item.name);
                setNewData([]);
                setInput("");
              }}
            >
              {item.name}
            </li>
            
          );
        })}
    </ul>
  );
};

export default SearchResult;
