import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FcInfo } from "react-icons/fc";
import DataTable ,{createTheme} from "react-data-table-component";
import { mockSearchResults } from "../sample-data/mock";
import { useState } from "react";
import { useEffect } from "react";
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
    {
      name: "Company Name",
      selector: (row) => row["Company Name"],
      sortable: true,
      grow: 2,
    },
    { name: "Symbol", selector: (row) => row.Symbol, sortable: true },
    { name: "ISIN", selector: (row) => row["ISIN Code"], sortable: true },
    {
      name: "Industry",
      selector: (row) => row.Industry,
      sortable: true,
      grow: 2,
    },
    { name: "Series", selector: (row) => row.Series, sortable: true },
  ];
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
  return (
    <div className={`${darkMode ? "bg-black" : "bg-blue-300"}`}>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <h1
            className={`headlines mt-5 ms-4`}
            style={{
              color: darkMode
                ? " rgba(255, 255, 255, 0.119)"
                : "rgba(0, 0, 0, 0.3)",
            }}
          >
            #Documentation
          </h1>
          <div className="about-text mx-5 my-4 font-extrabold text-xl text-gray-600">
            MS - Market Screeners is a stock market analysis platform, where we
            harness the power of data to help you make informed investment
            decisions. Leveraging the Nifty-50 Kaggle dataset, we provide
            comprehensive insights into the Indian stock market, specifically
            focusing on the Nifty-50 index.
          </div>
          <div className={`mx-5 px-2 py-1 w-50`}>
            <div className={`d-flex items-center gap-2 px-2 py-1 ${darkMode?"bg-blue-300":"bg-red-300"}`}>
              <FcInfo /> Note :{" "}
            </div>
            <div className={`bg-blue-200 px-2 py-1`}>
              This data is taken from{" "}
              <a
                className="text-blue-600"
                href="https://www.kaggle.com/datasets/rohanrao/nifty50-stock-market-data"
              >
                Kaggle (Nifty-50)
              </a>
              .
            </div>
          </div>
          <div className="about-text mx-5 my-4 font-extrabold text-xl text-gray-600">
            <p>GitHub Project Page :</p>
            <a href="https://github.com/priyanshu08soni/MS-Stock-Market-Website">
              {" "}
              (Click Here)
            </a>
          </div>
          <div className="about-text mx-5 my-4 font-extrabold text-xl text-gray-600">
            <p>Stocks that are involved :</p>
            <div
              className={`card mt-3 mb-5 border-5 ${
                darkMode ? "bg-gray-900" : "bg-blue-100"
              }`}
            >
              <DataTable
                columns={columns}
                data={allStocks}
                theme="solarized"
                pagination
              />
            </div>
          </div>
          <h1
            className={`headlines mt-5 ms-4`}
            style={{
              color: darkMode
                ? " rgba(255, 255, 255, 0.119)"
                : "rgba(0, 0, 0, 0.3)",
            }}
          >
            #GettingStarted(Dashboard)
          </h1>
          <div className=" about-text mx-16 my-4 font-extrabold text-xl text-gray-600">
            <p className="text-gray-400 my-2">Entering the stock symbol :</p>
            <div className="flex justify-between flex-wrap gap-5">
              <p className="flex flex-col flex-wrap">
                <p>
                Search for your stock(using stock symbol) that 
                </p>
                <p>
                you want to find.
                Then hit Enter :
                </p>
                <p>Then Click On the resulted List : </p>
                <p>EX : ( ADANIPORTS )</p>
              </p>
              <img className="docsImage" width={"400vw"} src={s1} alt="" />
            </div>
          </div>
          <hr className = "docsDivider"/>
          <div className="about-text mx-16 my-4 font-extrabold text-xl text-gray-600">
            <p className="text-gray-400 my-2">Getting result for Overview :</p>
            <div className="flex justify-between flex-wrap gap-5">
              <p className="flex flex-col flex-wrap">
                <p> In this we will be getting result as : Stock Symbol,</p>
                <p>Company Name, ISIN Code, Industry, Series.</p>
              </p>
              <img className="docsImage" width={"400vw"} src={s2} alt="" />
            </div>
          </div>
          <hr className = "docsDivider"/>
          <div className="about-text mx-16 my-4 font-extrabold text-xl text-gray-600">
            <p className="text-gray-400 my-2">Entering Date Range :</p>
            <div className="flex justify-between flex-wrap gap-5">
              <p className="flex flex-col flex-wrap">
                <p>By entering(click on the calender symbol) the </p>
                <p>specific date range will get us the ranged data.</p>
              </p>
              <img className="docsImage" width={"400vw"} src={s3} alt="" />
            </div>
          </div>
          <div className={`mx-16 px-2 py-1 w-50`}>
            <div
              className={`d-flex items-center gap-2 px-2 py-1 ${darkMode?"bg-blue-300":"bg-red-300"}`}
            >
              <FcInfo /> Note :{" "}
            </div>
            <div className={`bg-blue-200 px-2 py-1`}>
              Original data range ( 04-05-2020 to 30-04-2021 )
            </div>
          </div>
          <hr className = "docsDivider"/>
          <div className="about-text mx-16 my-4 font-extrabold text-xl text-gray-600">
            <p className="text-gray-400 my-2">Getting Ranged Calculated data :</p>
            <div className="flex justify-between flex-wrap gap-5">
              <p className="flex flex-col flex-wrap">
                <p>
                  The calculated data includes Previous Close,
                </p>
                <p>Open, Ranged Highest, Ranged Lowest,</p>
                <p>Close*, VWAP.</p>
              </p>
              <img className="docsImage" width={"400vw"} src={s4} alt="" />
            </div>
          </div>
          <hr className = "docsDivider"/>
          <div className="about-text mx-16 my-4 font-extrabold text-xl text-gray-600">
            <p className="text-gray-400 my-2">Getting Ranged Historical data :</p>
            <div className="flex justify-between flex-wrap gap-5">
              <p className="flex flex-col flex-wrap">
                <p>
                  The Historical data includes Date, Previous Close,
                </p>
                <p>
                  Open, High, Low, Close*, VWAP, Volume, 
                </p>
                <p>Value of Stocks, Trades</p>
              </p>
              <img className="docsImage" width={"400vw"} src={s5} alt="" />
            </div>
          </div>
          <hr className = "docsDivider"/>
          <div className="about-text mx-16 my-4 font-extrabold text-xl text-gray-600">
            <p className="text-gray-400 my-2">Historical data visualization using area graphs :</p>
            <div className="flex justify-between flex-wrap gap-5">
              <p className="flex flex-col flex-wrap">
                <p>Y-axis is the value range and X-axis is Date range.</p>
                <p className="text-gray-800">By hovering over a perticular date we will get the</p>
                <p>cordinates for that point.</p>
              </p>
              <img className="docsImage" width={"400vw"} src={s6} alt="" />
            </div>
          </div>
          <hr className = "docsDivider"/>
          <div className="about-text mx-16 my-4 font-extrabold text-xl text-gray-600">
            <p className="text-gray-400 my-2">Calculated Trade Information :</p>
            <div className="flex justify-between flex-wrap gap-5">
              <p className="flex flex-col flex-wrap">
                <p>This calculated trade information includes:</p>
                <p>a) Traded Volume(Lakhs)</p>
                <p>b) Traded Value(₹Cr.)</p>
                <p>c) Outstanding shares(Last Day)</p>
                <p>d) Total Market Cap(Last Day)(₹Cr.)</p>
                <p>e) Impact Cost</p>
                <p>f) % of Deliverable(Last Day)</p>
              </p>
              <img className="docsImage" width={"400vw"} src={s7} alt="" />
            </div>
          </div>
          <hr className = "docsDivider"/>
          <div className="about-text mx-16 my-4 font-extrabold text-xl text-gray-600">
            <p className="text-gray-400 my-2">Calculated Price Information :</p>
            <div className="flex justify-between flex-wrap gap-5" >
              <p className="flex flex-col flex-wrap">
                <p>This calculated Price information includes:</p>
                <p>a) 52W High ( 04-05-2020 to 30-04-2021 )</p>
                <p>b) 52W Low ( 04-05-2020 to 30-04-2021 )</p>
                <p>c) Upper Band</p>
                <p>d) Lower Band</p>
                <p>e) Price Band</p>
              </p>
              <img className="docsImage" width={"400vw"} src={s8} alt="" />
            </div>
          </div>
          <hr className = "docsDivider"/>
          <div className="about-text mx-16 my-4 px-1 font-extrabold text-xl text-gray-400">
              Whether you're a seasoned investor or just starting out, our platform equips you with the tools and data needed to make confident investment choices. Explore the dynamic world of stock trading with us and take your investment strategy to the next level.
          </div>
        </div>
      </div>
      <section className="footersection">
        <div
          className="footer"
          style={{
            border: darkMode
              ? "3px solid rgba(255, 255, 255, 0.247)"
              : "3px solid rgba(34, 85, 195, 0.247)",
            background: darkMode
              ? "rgba(255, 255, 255, 0.133)"
              : "rgba(25, 68, 142, 0.523)",
          }}
        >
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Documentation;
