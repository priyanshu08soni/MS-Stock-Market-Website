import React, { useContext, useState ,useEffect} from "react";
import { convertDateToUnixTimestamp, convertUnixTimestampToDate, createDate } from "../helpers/Date-helper";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartConfig } from "../sample-data/chart-config";
import ThemeContext from "../context/ThemeContext";
import { fetchHistoricalData } from "../api/stock-api";
import StockContext from "../context/StockContext";
import { mockHistoricalData } from "../sample-data/mock";

const Chart = () => {
  const {darkMode}=useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1W");
  const {stockSymbol} =useContext(StockContext);
  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };
  useEffect(()=>{
    const getDateRange=()=>{
      const {days,weeks,months,years}=chartConfig[filter];
      const endDate=new Date();
      const startDate=createDate(endDate,-days,-weeks,-months,-years);
      const startTimeStampUnix= convertDateToUnixTimestamp(startDate);
      const endTimeStampsUnix=convertDateToUnixTimestamp(endDate);
      return {startTimeStampUnix,endTimeStampsUnix};
    }
    const updateChartData=async()=>{
      try {
        const {startTimeStampUnix,endTimeStampsUnix}=getDateRange();
        const resolution=chartConfig[filter].resolution;
        const result=await fetchHistoricalData(stockSymbol,resolution,startTimeStampUnix,endTimeStampsUnix);
        setData(formatData(result));
      } catch (error) {
        //If the data is not fetching put the mockdata because of premium issue
        setData(formatData(mockHistoricalData));
        console.log(error);
      }
    }
    updateChartData();
  },[stockSymbol,filter])
  
  return (
    <>
      
      <div className={`w-full h-full rounded-md py-5 relative ${darkMode?"bg-gray-900":"bg-blue"}`}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={darkMode ? "#312e81":"rgb(199 210 254)"} stopOpacity={0.8} />
                <stop offset="95%" stopColor={darkMode ? "#312e81":"rgb(199 210 254)"} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#312e81"
              fillOpacity={1}
              strokeWidth={0.5}
              fill="url(#chartColor)"
            />
            <Tooltip  
              contentStyle={darkMode?{backgroundColor:"#112827"}:null}
              itemStyle={darkMode?{color:"#818cf8"}:null}
             />
            <XAxis dataKey={"date"} />
            <YAxis domain={["dataMin", "dataMax"]} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default Chart;
