import React, { useContext, useEffect, useState } from "react";
import Chart from "../components/Chart";
import Header from "../components/Header";
import TradeInfo from "../components/TradeInfo";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import StockDetails from "../components/StockDetails";
import Footer from "../components/Footer";
import { mockSearchResults } from "../sample-data/mock";
import { historicalData } from "../sample-data/mockHistoricalData";
import DataTable, { createTheme } from "react-data-table-component";
import PriceInfo from "../components/PriceInfo";
import StockScreener from "../components/StockScreener";

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
    { name: "DATE", selector: (row) => row.Date, sortable: true },
    { name: "OPEN", selector: (row) => row.Open, sortable: true },
    { name: "HIGH", selector: (row) => row.High, sortable: true },
    { name: "LOW", selector: (row) => row.Low, sortable: true },
    { name: "CLOSE", selector: (row) => row.Close, sortable: true },
    { name: "VOLUME", selector: (row) => row.Volume, sortable: true },
  ];

  // Date Filter Data Extraction
  const [stockData, setStockData] = useState([]);
  const [fromDate, setFromDate] = useState("2020-05-04");
  const [toDate, setToDate] = useState("2021-04-30");
  const [high, setHigh] = useState(-Infinity);
  const [low, setLow] = useState(Infinity);
  const [turnover, setTurnover] = useState(0);
  const [tpxv, setTpxv] = useState(0);
  const [volume, setVolume] = useState(0);

  createTheme("solarized", {
    text: { primary: "#268bd2", secondary: "#2aa198" },
    background: { default: "transparent" },
    context: { background: "#cb4b16", text: "#FFFFFF" },
    divider: { default: "#073642" },
    button: {
      default: "#2aa198",
      hover: "rgba(0,0,0,.48)",
      focus: "rgba(255,255,255,.12)",
      disabled: "rgba(255, 255, 255, .34)",
    },
    sortFocus: { default: "#2aa198" },
  }, "dark");

  useEffect(() => {
    if (!historicalData[stockSymbol] || !fromDate || !toDate) {
      setStockData([]);
      return;
    }
    // ... Logic remains similar but simplified presentation ...
    let start = new Date(fromDate);
    let end = new Date(toDate);
    end.setHours(23, 59, 59, 999);
    if (start > end) { const tmp = start; start = end; end = tmp; }

    const all = historicalData[stockSymbol];
    const filtered = all.filter((item) => {
      if (!item?.Date) return false;
      const d = new Date(item.Date);
      return d >= start && d <= end;
    });

    // compute aggregates
    let tempHigh = -Infinity;
    let tempLow = Infinity;
    let tempTurnover = 0;
    let tempTpxv = 0;
    let cumulativeVolume = 0;

    filtered.forEach((item) => {
      if (typeof item.High === "number") tempHigh = Math.max(tempHigh, item.High);
      if (typeof item.Low === "number") tempLow = Math.min(tempLow, item.Low);
      tempTurnover += Number(item.Turnover || 0);
      const typicalPrice = (Number(item.High || 0) + Number(item.Low || 0) + Number(item.Close || 0)) / 3;
      tempTpxv += typicalPrice * Number(item.Volume || 0);
      cumulativeVolume += Number(item.Volume || 0);
    });

    setStockData(filtered);
    setHigh(tempHigh === -Infinity ? "N/A" : tempHigh);
    setLow(tempLow === Infinity ? "N/A" : tempLow);
    setTpxv(tempTpxv);
    setTurnover(tempTurnover);
    setVolume(cumulativeVolume);
  }, [fromDate, toDate, stockSymbol]);

  useEffect(() => {
    const detail = allStocks.find(s => s.Symbol === stockSymbol);
    if (detail) {
      setStockDetails({
        Company: detail["Company Name"],
        ISIN: detail["ISIN Code"],
        Industry: detail.Industry,
        Series: detail.Series,
        Symbol: detail.Symbol,
      });
    }
  }, [stockSymbol, allStocks]);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${darkMode ? "bg-slate-900 text-gray-100" : "bg-gray-100 text-gray-800"}`}>
      <Header />

      <main className="flex-1 p-4 md:p-6 max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Left Sidebar: Screener */}
        <div className="lg:col-span-1 h-[500px] lg:h-[calc(100vh-140px)] lg:sticky top-24 overflow-hidden z-20">
          <StockScreener />
        </div>

        {/* Right Content: Details & Charts */}
        <div className="lg:col-span-3 space-y-6 overflow-x-hidden">

          {/* Top Row: Details & Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className={`col-span-1 md:col-span-2 p-6 rounded-2xl shadow-md backdrop-blur-sm ${darkMode ? "bg-slate-800/50" : "bg-white"}`}>
              <h1 className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-4">Market Overview</h1>
              <StockDetails details={stockDetails} />
            </div>

            <div className={`p-6 rounded-2xl shadow-md backdrop-blur-sm flex flex-col justify-center gap-4 ${darkMode ? "bg-slate-800/50" : "bg-white"}`}>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-60">High</span>
                <span className="text-xl font-bold text-emerald-500">{typeof high === 'number' ? high.toFixed(2) : high}</span>
              </div>
              <div className="w-full h-px bg-current opacity-10"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-60">Low</span>
                <span className="text-xl font-bold text-rose-500">{typeof low === 'number' ? low.toFixed(2) : low}</span>
              </div>
              <div className="w-full h-px bg-current opacity-10"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-60">Prev. Close</span>
                <span className="text-xl font-bold text-indigo-400">{stockData[0]?.pclose || "N/A"}</span>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className={`p-4 rounded-2xl shadow-md relative group ${darkMode ? "bg-slate-800/50" : "bg-white"}`}>
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <input
                type="date"
                value={fromDate}
                onChange={e => setFromDate(e.target.value)}
                className={`text-xs p-2 rounded-lg outline-none ${darkMode ? "bg-slate-700 text-white" : "bg-gray-100 text-gray-800"}`}
              />
              <input
                type="date"
                value={toDate}
                onChange={e => setToDate(e.target.value)}
                className={`text-xs p-2 rounded-lg outline-none ${darkMode ? "bg-slate-700 text-white" : "bg-gray-100 text-gray-800"}`}
              />
            </div>
            <div className="h-[400px] w-full">
              <Chart stockData={stockData} />
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-2xl shadow-md ${darkMode ? "bg-slate-800/50" : "bg-white"}`}>
              <h3 className="mb-4 font-semibold opacity-70">Trade Statistics</h3>
              <TradeInfo details={stockData} totalTradedValue={turnover} totalTradedShares={volume} />
            </div>
            <div className={`p-6 rounded-2xl shadow-md ${darkMode ? "bg-slate-800/50" : "bg-white"}`}>
              <h3 className="mb-4 font-semibold opacity-70">Price Analytics</h3>
              <PriceInfo details={stockData} />
            </div>
          </div>

          {/* Data Table */}
          <div className={`rounded-2xl shadow-md overflow-hidden ${darkMode ? "bg-slate-800/50" : "bg-white"}`}>
            <DataTable
              title={<div className="p-4 font-bold text-lg">Historical Data</div>}
              columns={columns}
              data={stockData}
              theme={darkMode ? "solarized" : "default"}
              pagination
              customStyles={{
                header: { style: { background: 'transparent' } },
                rows: {
                  style: {
                    background: 'transparent',
                    color: darkMode ? '#e5e7eb' : '#1f2937'
                  }
                },
                headCells: {
                  style: {
                    background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                    color: darkMode ? '#9ca3af' : '#4b5563'
                  }
                },
                pagination: { style: { background: 'transparent', color: 'inherit' } }
              }}
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
