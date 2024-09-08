import React, { useContext, useEffect, useState } from "react";
import Chart from "../components/Chart";
import Header from "../components/Header";
import TradeInfo from "../components/TradeInfo";
import Overview from "../components/Overview";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import StockDetails from "../components/StockDetails";
import Footer from "../components/Footer";
import { mockSearchResults } from "../sample-data/mock";
import { historicalData } from "../sample-data/mockHistoricalData";
import DataTable ,{createTheme} from "react-data-table-component";
import PriceInfo from "../components/PriceInfo"

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const allStocks = mockSearchResults.result;
  const [stockDetails, setStockDetails] = useState({
    Company: "Company",
    ISIN: "ISIN",
    Industry: "Industry",
    Series: "Series",
    Symbol: "Symbol",
  });
  

  const columns = [
    { name: 'DATE', selector: row => row.Date, sortable: true },
    { name: 'OPEN', selector: row => row.Open, sortable: true },
    { name: 'HIGH', selector: row => row.High, sortable: true },
    { name: 'LOW', selector: row => row.Low, sortable: true },
    { name: 'PREV. CLOSE', selector: row => row.pclose, sortable: true },
    { name: 'CLOSE', selector: row => row.Close, sortable: true },
    { name: 'VWAP', selector: row => row.Vwap, sortable: true },
    { name: 'VOLUME', selector: row => row.Volume, sortable: true },
    { name: 'VALUE OF STOCKS', selector: row => row.Turnover, sortable: true, grow:2},
    { name: 'TRADES', selector: row => row.Trades, sortable: true },
  ];
  //Date Filter Data Extraction
  const [stockData,setStockData] = useState([]);
  createTheme(
    'solarized',
    {
      text: {
        primary: '#268bd2',
        secondary: '#2aa198',
      },
      background: {
        default: darkMode ? "bg-gray-900" : " bg-blue-100",
      },
      context: {
        background: '#cb4b16',
        text: '#FFFFFF',
      },
      divider: {
        default: '#073642',
      },
      button: {
        default: '#2aa198',
        hover: 'rgba(0,0,0,.48)',
        focus: 'rgba(255,255,255,.12)',
        disabled: 'rgba(255, 255, 255, .34)',
      },
      sortFocus: {
        default: '#2aa198',
      },
    },
    'dark',
  );
  const [yearlyHigh,setYearlyHigh]= useState(-Infinity);
  const [yearlyLow,setYearlyLow]= useState(Infinity);
  useEffect(()=>{
    let tempYearlyHigh = -Infinity;
    let tempYearlyLow = Infinity;
    for(let i = 0;i<historicalData[stockSymbol]?.length;i++){
      tempYearlyHigh=Math.max(tempYearlyHigh,historicalData[stockSymbol][i]?.High);
      tempYearlyLow=Math.min(tempYearlyLow,historicalData[stockSymbol][i]?.Low);
    }
    setYearlyHigh(tempYearlyHigh);
    setYearlyLow(tempYearlyLow);
  },[historicalData]);

  const [fromDate,setFromDate] = useState("2020-05-04");
  const [toDate,setToDate] = useState("2021-04-30");
  const [high,setHigh] = useState(-Infinity);
  const [low,setLow] = useState(Infinity);
  const [turnover,setTurnover]=useState(0);
  //tpxv = cumulative value( TypicalPrice*volume)
  const [tpxv,setTpxv] = useState(0);
  const [volume,setVolume] =useState(0);
  console.log(stockSymbol);
  useEffect(()=>{
    let tempHigh = -Infinity;
    let tempLow = Infinity;
    let tempTurnover = 0;
    let tempTpxv = 0;
    let cumulativeVolume =  0;
    let data = [];
    let currentDate = new Date(fromDate);
    let endDate = new Date(toDate);
    
    for(let i = 0;i<historicalData[stockSymbol]?.length;i++){
      let date =new Date(historicalData[stockSymbol][i]?.Date);
      let month =new Date(historicalData[stockSymbol][i]?.Date);
      let year =new Date(historicalData[stockSymbol][i]?.Date);
      if( 
        currentDate.getDate() <= date?.getDate() &&
        currentDate.getMonth() <= month.getMonth() &&
        currentDate.getFullYear() <= year.getFullYear()
      ){
        while(currentDate <= endDate){
          let date =new Date(historicalData[stockSymbol][i]?.Date);
          let month =new Date(historicalData[stockSymbol][i]?.Date);
          let year =new Date(historicalData[stockSymbol][i]?.Date);
          if( 
            currentDate.getDate() === date?.getDate() &&
            currentDate.getMonth() === month.getMonth() &&
            currentDate.getFullYear() === year.getFullYear() 
          ){
            if(high < historicalData[stockSymbol][i]?.High){
              tempHigh = Math.max(tempHigh,historicalData[stockSymbol][i].High);
            }
            if(low > historicalData[stockSymbol][i]?.Low){
              tempLow = Math.min(tempLow,historicalData[stockSymbol][i].Low);
            }
            tempTurnover = tempTurnover+historicalData[stockSymbol][i].Turnover;
            tempTpxv = tempTpxv+(((historicalData[stockSymbol][i].High+historicalData[stockSymbol][i].Low+historicalData[stockSymbol][i].Close)/3)*historicalData[stockSymbol][i].Volume);
            cumulativeVolume = cumulativeVolume+historicalData[stockSymbol][i].Volume;
            data.push(historicalData[stockSymbol][i++]);
            currentDate.setDate(currentDate.getDate()+1);
          }else{
            currentDate.setDate(currentDate.getDate()+1);
          }
        }
        break;
      }
    }
    setStockData(data);
    setHigh(tempHigh);
    setLow(tempLow);
    setTpxv(tempTpxv);
    setTurnover(tempTurnover);
    setVolume(cumulativeVolume);
  },[fromDate,toDate,stockSymbol])
  useEffect(() => {
    for (let i = 0; i < allStocks.length; i++) {
      if (stockSymbol === allStocks[i].Symbol) {
        setStockDetails({
          Company: allStocks[i]["Company Name"],
          ISIN: allStocks[i]["ISIN Code"],
          Industry: allStocks[i].Industry,
          Series: allStocks[i].Series,
          Symbol: allStocks[i].Symbol,
        });
      }
    }
  }, [stockSymbol,allStocks]);
  return (
    <div className={`${darkMode?"bg-black":"bg-green-100"}`}>
      <div
        className={`custom-scrollbar auto-rows-fr gap-10 px-10 pb-10 font-roboto 
        ${darkMode ? " text-gray-300" : " "} 
        `}
      >
        <div style={{marginLeft:"-50px"}}>
          <Header />
        </div>
        <div className={`py-3`}>
          <Overview />
        </div>
        {(stockSymbol!="FB") && (
          <>
          <h1 className="headlines flex justify-end" style={{color:darkMode?" rgba(255, 255, 255, 0.119)":"rgba(0, 0, 0, 0.3)"}}>#company</h1>
        <div className="pb-5">
          <StockDetails details={stockDetails} />
        </div>
        <h1 className="headlines flex justify-end" style={{color:darkMode?" rgba(255, 255, 255, 0.119)":"rgba(0, 0, 0, 0.3)"}}>#historicaldata</h1>
        <div className='flex justify-end gap-4'>
            <input type="date" value={fromDate} onChange={e=>setFromDate(e.target.value)} max="2021-04-29" min="2020-05-04" className={`my-2 py-1 px-3 rounded-md border-2 border-gray-600 card ${darkMode?"bg-gray-900":"bg-blue-100"}`} />
            <input type="date" value={toDate} onChange={e=>setToDate(e.target.value)} min="2020-05-05" max="2021-04-30"  className={`my-2 py-1 px-3 rounded-md border-2 border-gray-600 card ${darkMode?"bg-gray-900":"bg-blue-100"}`} />
        </div>
        <div className='flex flex-wrap justify-between gap-3'>
            <div className={`h-full stock-value card rounded-md relative p-8 border-2 bg-blue-100 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-blue-100 border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >P. CLOSE</div>
                <div className='font-bold text-blue-300'>{stockData[0]? stockData[0].pclose:""}</div>
            </div>
            <div className={`h-full stock-value card rounded-md relative p-8 border-2 bg-blue-100 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-blue-100 border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >OPEN</div>
                <div className='font-bold  text-blue-300'>{stockData[0]?stockData[0].Open:""}</div>
            </div>
            <div className={`h-full stock-value card rounded-md relative p-8 border-2 bg-blue-100 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-blue-100 border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >HIGH</div>
                <div className='font-bold text-blue-300'>{high>0?high:""}</div>
            </div>
            <div className={`h-full stock-value card rounded-md relative p-8 border-2 bg-blue-100 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-blue-100 border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >LOW</div>
                <div className='font-bold  text-blue-300'>{low!=Infinity?low:""}</div>
            </div>
            <div className={`h-full stock-value card rounded-md relative p-8 border-2 bg-blue-100 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-blue-100 border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >CLOSE*</div>
                <div className='font-bold  text-blue-300'>{stockData[stockData.length-1]?stockData[stockData.length-1].Close:""}</div>
            </div>
            <div className={`h-full stock-value card rounded-md relative p-8 border-2 bg-blue-100 shadow-md my-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-blue-100 border-blue-100"}`}
            style={{ color:"gray",overflow:"auto"}}
            >
                <div className='font-extrabold text-xl pb-3' >VWAP</div>
                <div className='font-bold  text-blue-300'>{(tpxv && volume)?Math.round(tpxv/volume):""}</div>
            </div>
        </div>
        <div className={`card mt-3 mb-5 border-5 ${darkMode?"bg-gray-900":"bg-blue-100"}`}>
          <DataTable
            title="Historical Data"
            columns={columns}
            data={stockData}
            theme="solarized"
            pagination
            />
        </div>
        <h1 className="headlines flex justify-end" style={{color:darkMode?" rgba(255, 255, 255, 0.119)":"rgba(0, 0, 0, 0.3)"}}>#charts</h1>
        <div className={`pr-10 py-3 mb-5 ${darkMode?"bg-gray-900":"bg-blue-100"} card`} style={{ height: "50vh" }}>
          <Chart stockData={stockData} >Chart</Chart>
        </div>
        <h1 className="headlines flex justify-end" style={{color:darkMode?" rgba(255, 255, 255, 0.119)":"rgba(0, 0, 0, 0.3)"}}>#details</h1>
        <div className="pb-3">
          <TradeInfo details={stockData} totalTradedValue={turnover} totalTradedShares={volume} />
        </div>
        <div className="py-3">
          <PriceInfo details={stockData} yearlyHigh={yearlyHigh} yearlyLow={yearlyLow} />
        </div>
          </>
        )}
      </div>
      <div
        className={`footersection row-span-2 col-span-2 xl:col-span-3 ${stockSymbol=="FB"?"fixed-bottom bg-black":""}`}
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(34, 85, 195, 0.77) 0%, rgba(0,0,0,1) 100%, rgba(17,24,39,1) 100%)"
            : "radial-gradient(circle, rgba(34, 85, 195, 0.77) 0%, rgba(220,252,232,1) 71%, rgba(239,246,255,1) 100%)",
          paddingLeft: "2vw",
          paddingRight: "2vw",
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
    </div>
  );
};

export default Dashboard;
