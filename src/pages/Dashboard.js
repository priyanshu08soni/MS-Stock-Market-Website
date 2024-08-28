import React, { useContext, useEffect, useState } from "react";
import Chart from "../components/Chart";
import Header from "../components/Header";
import Details from "../components/Details";
import Overview from "../components/Overview";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { MdContentPasteSearch, MdWidthFull } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { LiaOpencart } from "react-icons/lia";
import StockDetails from "../components/StockDetails";
import Footer from "../components/Footer";
import { mockSearchResults } from "../sample-data/mock";
import { historicalData } from "../sample-data/mockHistoricalData";
const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [allStocks, setAllStocks] = useState(mockSearchResults.result);
  const [stockData,setStockData] = useState(historicalData);
  const [stockDetails, setStockDetails] = useState({
    Company: "Company",
    ISIN: "ISIN",
    Industry: "Industry",
    Series: "Symbol",
    Symbol: "Symbol",
  });
  const [fromDate,setFromDate] = useState("2020-05-04");
  const [toDate,setToDate] = useState("2021-04-30");

  console.log(stockData)

  useEffect(()=>{
    let data = [];
    let currentDate = new Date(fromDate);
    let endDate = new Date(toDate);
    for(let i = 0;i<250;i++){
      if(historicalData[stockSymbol] && fromDate === historicalData[stockSymbol][i]?.Date){
        while(currentDate <= endDate && i<250){
          data.push(historicalData[stockSymbol][i++]);
          currentDate.setDate(currentDate.getDate()+1);
        }
      }
    }
    setStockData(data);
  },[fromDate,toDate])
  useEffect(() => {
    for (let i = 0; i < allStocks.length; i++) {
      if (stockSymbol == allStocks[i].Symbol) {
        setStockDetails({
          Company: allStocks[i]["Company Name"],
          ISIN: allStocks[i]["ISIN Code"],
          Industry: allStocks[i].Industry,
          Series: allStocks[i].Series,
          Symbol: allStocks[i].Symbol,
        });
      }
    }
  }, [stockSymbol]);
  return (
    <>
      <div
        className={`custom-scrollbar auto-rows-fr gap-10 px-10 pb-10 font-roboto 
        ${darkMode ? "bg-gray-900 text-gray-300" : " bg-blue-50"} 
        `}
      >
        <div>
          <Header name={stockDetails?.name} />
        </div>
        <div className="py-3">
          <Overview />
        </div>
        <div className="py-3">
          <StockDetails details={stockDetails} />
        </div>
        <div className='flex justify-end gap-4'>
            <input type="date" value={fromDate} onChange={e=>setFromDate(e.target.value)} max="2021-04-29" min="2020-05-04" className='my-2 py-1 px-4 rounded-md bg-blue-950 border-2 border-gray-600' />
            <input type="date" value={toDate} onChange={e=>setToDate(e.target.value)} max="2021-04-30" min="2020-05-05" className='my-2 py-1 px-4 rounded-md bg-blue-950 border-2 border-gray-600' />
        </div>
        <div className='flex flex-wrap justify-between'>
            <div className={`h-full card rounded-md relative p-8 border-2 bg-gray-300 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >P. CLOSE</div>
                <div className='font-bold text-blue-300'>9,914.20</div>
            </div>
            <div className={`h-full card rounded-md relative p-8 border-2 bg-gray-300 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >OPEN</div>
                <div className='font-bold  text-blue-300'>9,970.00</div>
            </div>
            <div className={`h-full card rounded-md relative p-8 border-2 bg-gray-300 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >HIGH</div>
                <div className='font-bold text-blue-300'>10,444.35</div>
            </div>
            <div className={`h-full card rounded-md relative p-8 border-2 bg-gray-300 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >LOW</div>
                <div className='font-bold  text-blue-300'>9,930.00</div>
            </div>
            <div className={`h-full card rounded-md relative p-8 border-2 bg-gray-300 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >CLOSE*</div>
                <div className='font-bold  text-blue-300'>10,406.45</div>
            </div>
            <div className={`h-full card rounded-md relative p-8 border-2 bg-gray-300 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >VWAP</div>
                <div className='font-bold  text-blue-300'>10,266.48</div>
            </div>
        </div>
        <div className="mb-3">
          <div class="container">
            <div class="card">
              <MdContentPasteSearch
                className="cardImage"
                style={{ color: "white", fontSize: "4vw", margin: "auto" }}
              />
              <h3>Past Stocks</h3>
            </div>
            <div class="card">
              <BiAnalyse
                className="cardImage"
                style={{ color: "white", fontSize: "4vw", margin: "auto" }}
              />
              <h3>Analysing</h3>
            </div>
            <div class="card">
              <LiaOpencart
                className="cardImage"
                style={{ color: "white", fontSize: "4vw", margin: "auto" }}
              />
              <h3>Buying Stocks</h3>
            </div>
          </div>
        </div>
        <div className="pr-10 py-3" style={{ height: "50vh" }}>
          <Chart stockData={stockData} >Chart</Chart>
        </div>
        <div className="py-3">
          <Details details={stockData} />
        </div>
        <div className="py-3">
          <Details details={stockData} />
        </div>
      </div>
      <div
        className={`footersection row-span-2 col-span-2 xl:col-span-3`}
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(34, 85, 195, 0.77) 0%, rgba(17,24,39,1) 71%, rgba(17,24,39,1) 100%)"
            : "radial-gradient(circle, rgba(34, 85, 195, 0.77) 0%, rgba(239,246,255,1) 71%, rgba(239,246,255,1) 100%)",
          paddingLeft: "13vw",
          paddingRight: "13vw",
          paddingBottom: "2vw",
        }}
      >
        <div
          className={`footer `}
          style={{
            border: darkMode
              ? "3px solid rgba(255, 255, 255, 0.247)"
              : "3px solid rgba(34, 85, 195, 0.247)",
          }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
