import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeContext from "../context/ThemeContext";
import { Info, Github } from "lucide-react";
import DataTable from "react-data-table-component";
import { mockSearchResults } from "../sample-data/mock";

import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";

const Documentation = () => {
  const { darkMode } = useContext(ThemeContext);
  const allStocks = mockSearchResults.result;

  const columns = [
    { name: "Company Name", selector: (row) => row["Company Name"], sortable: true, grow: 2 },
    { name: "Symbol", selector: (row) => row.Symbol, sortable: true },
    { name: "ISIN", selector: (row) => row["ISIN Code"], sortable: true },
    { name: "Industry", selector: (row) => row.Industry, sortable: true, grow: 2 },
    { name: "Series", selector: (row) => row.Series, sortable: true },
  ];

  const customStyles = {
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
        color: darkMode ? '#9ca3af' : '#4b5563',
        fontSize: '0.85rem',
        fontWeight: 'bold'
      }
    },
    pagination: { style: { background: 'transparent', color: 'inherit' } },
    table: { style: { background: 'transparent' } }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-slate-900 text-gray-100" : "bg-gray-100 text-gray-800"}`}>
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          #Documentation
        </h1>

        <div className={`p-8 rounded-3xl shadow-md backdrop-blur-sm mb-12 ${darkMode ? "bg-slate-800/50" : "bg-white"}`}>
          <p className="text-xl leading-relaxed opacity-90 mb-6">
            MS - Market Screeners is a stock market analysis platform, where we
            harness the power of data to help you make informed investment decisions.
            Leveraging the Nifty-50 Kaggle dataset, we provide comprehensive
            insights.
          </p>

          <div className={`flex items-start gap-4 p-4 rounded-xl mb-6 ${darkMode ? "bg-blue-900/20 border border-blue-800 text-blue-200" : "bg-blue-50 border border-blue-100 text-blue-700"}`}>
            <Info className="shrink-0 mt-1" size={20} />
            <div>
              <span className="font-bold block mb-1">Data Source</span>
              This data is taken from <a className="underline hover:text-blue-500" href="https://www.kaggle.com/datasets/rohanrao/nifty50-stock-market-data">Kaggle (Nifty-50)</a>.
            </div>
          </div>

          <a href="https://github.com/priyanshu08soni/MS-Stock-Market-Website" className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition ${darkMode ? "bg-neutral-800 hover:bg-neutral-700" : "bg-white border hover:bg-gray-50 text-gray-700"}`}>
            <Github size={18} />
            View on GitHub
          </a>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Explore Stocks</h2>
          <div className={`rounded-2xl shadow-md overflow-hidden ${darkMode ? "bg-slate-800/50" : "bg-white"}`}>
            <DataTable
              columns={columns}
              data={allStocks}
              pagination
              customStyles={customStyles}
              theme={darkMode ? "solarized" : "default"}
            />
          </div>
        </section>

        <h2 className="text-3xl font-bold mb-8 opacity-90">Getting Started Guide</h2>

        <div className="space-y-12">
          {[
            { title: "Search for a Stock", desc: "Use the search bar to find stocks e.g., ADANIPORTS. Click on the result.", img: s1 },
            { title: "Overview Details", desc: "View Company Name, ISIN, Industry, and Series.", img: s2 },
            { title: "Date Range Filter", desc: "Select specific dates to analyze historical data range.", img: s3 },
            { title: "Calculated Metrics", desc: "Get Previous Close, High, Low, VWAP and more for the selected range.", img: s4 },
            { title: "Historical Data Table", desc: "Detailed daily records of OHLCV data.", img: s5 },
            { title: "Interactive Area Charts", desc: "Hover over the chart to see precise values for any date.", img: s6 },
            { title: "Trade Statistics", desc: "Volume, Value, Market Cap, and Impact Cost analytics.", img: s7 },
            { title: "Price Analytics", desc: "52-Week High/Low and Price Bands.", img: s8 }
          ].map((step, i) => (
            <div key={i} className={`p-8 rounded-3xl backdrop-blur-sm flex flex-col lg:flex-row gap-8 items-center ${darkMode ? "bg-slate-800/50" : "bg-white"}`}>
              <div className="flex-1 space-y-4">
                <div className="text-sm font-bold text-indigo-500 uppercase tracking-wider">Step {i + 1}</div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="opacity-80 text-lg">{step.desc}</p>
                {i === 2 && (
                  <div className={`mt-4 p-3 rounded-lg text-sm inline-block ${darkMode ? "bg-yellow-900/20 text-yellow-200" : "bg-yellow-50 text-yellow-800"}`}>
                    Note: Original Data Range (04-05-2020 to 30-04-2021)
                  </div>
                )}
              </div>
              <div className="flex-1 w-full max-w-lg">
                <img src={step.img} alt={step.title} className="rounded-xl shadow-2xl border border-opacity-20 w-full hover:scale-105 transition duration-500" />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
