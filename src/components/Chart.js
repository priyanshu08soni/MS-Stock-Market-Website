import React, { useContext, useState ,useEffect} from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";

const Chart = ({stockData}) => {
  const {darkMode}=useContext(ThemeContext);
  const [data, setData] = useState([]);
  const {stockSymbol} =useContext(StockContext);
  const formatData = () => {
    return stockData.map((item, index) => {
      return {
        value: ((item.High+item.Low+item.Close)/3).toFixed(2),
        date: item.Date,
      };
    });
  };
  useEffect(()=>{
    setData(formatData());
  },[stockSymbol,stockData])
  
  return (
    <>
      
      <div className={`w-full h-full rounded-md py-5 relative ${darkMode?"bg-gray-900":"bg-blue-100"}`}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={darkMode ? "#312e81":"rgb(199 210 254)"} stopOpacity={0.8} />
                <stop offset="95%" stopColor={darkMode ? "#312e81":"rgb(199 210 254)"} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#312e81"
              fillOpacity={1}
              strokeWidth={1}
              fill="url(#chartColor)"
            />
            <Tooltip  
              contentStyle={darkMode?{backgroundColor:"#112827"}:null}
              itemStyle={darkMode?{color:"#818cf8"}:null}
             />
            <XAxis dataKey={"date"} fontSize={12} />
            <YAxis domain={["dataMin", "dataMax"]} fontSize={12} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default Chart;
