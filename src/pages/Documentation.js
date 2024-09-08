import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FcInfo } from "react-icons/fc";
import DataTable from "react-data-table-component";
import { mockSearchResults } from "../sample-data/mock";
import { useState } from "react";
import { useEffect } from "react";
const Documentation = () => {
  const { darkMode } = useContext(ThemeContext);
  const allStocks = mockSearchResults.result;
  const columns = [
    { name: 'Company Name', selector: row => row["Company Name"], sortable: true , grow:2 },
    { name: 'Symbol', selector: row => row.Symbol, sortable: true },
    { name: 'ISIN', selector: row => row["ISIN Code"], sortable: true },
    { name: 'Industry', selector: row => row.Industry, sortable: true , grow:2},
    { name: 'Series', selector: row => row.Series, sortable: true },
  ];
  return (
    <div className={`${darkMode?"bg-black":"bg-blue-300"}`}>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <h1 className={`headlines mt-5 ms-4`} style={{color:darkMode?" rgba(255, 255, 255, 0.119)":"rgba(0, 0, 0, 0.3)"}} >#Documentation</h1>
          <div className="about-text mx-5 my-4 font-extrabold text-xl text-gray-600">
              MS - Market Screeners is a stock market analysis platform, where we harness
              the power of data to help you make informed investment decisions.
              Leveraging the Nifty-50 Kaggle dataset, we provide comprehensive
              insights into the Indian stock market, specifically focusing on
              the Nifty-50 index.
          </div>
          <div className={`mx-5 px-2 py-1`} >
            <div className={`bg-blue-300 d-flex items-center gap-2 px-2 py-1`}><FcInfo /> Note : </div>
            <div className={`bg-blue-200 px-2 py-1`}>This data is taken from <a className="text-blue-600" href="https://www.kaggle.com/datasets/rohanrao/nifty50-stock-market-data">Kaggle (Nifty-50)</a>.</div>
          </div>
          <div className="about-text mx-5 my-4 font-extrabold text-xl text-gray-600">
              <p>GitHub Project Page :</p>
              <a href="https://github.com/priyanshu08soni/MS-Stock-Market-Website"> https://github.com/priyanshu08soni/MS-Stock-Market-Website</a>
          </div>
          <div className="about-text mx-5 my-4 font-extrabold text-xl text-gray-600">
            <p>Stocks that are involved :</p>
            <div className={`card mt-3 mb-5 border-5 ${darkMode?"bg-gray-900":"bg-blue-100"}`}>
            <DataTable
              columns={columns}
              data={allStocks}
              theme="solarized"
              pagination
            />
        </div>
          </div>
        </div>
      </div>
      <section className="footersection">
        <div className="footer" style={{
              border: darkMode
              ? "3px solid rgba(255, 255, 255, 0.247)"
              : "3px solid rgba(34, 85, 195, 0.247)",
              background:darkMode
              ?"rgba(255, 255, 255, 0.133)"
              :"rgba(25, 68, 142, 0.523)",
          }}>
          <Footer />
        </div> 
      </section>
    </div>
  )
}

export default Documentation
