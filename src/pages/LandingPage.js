import React from "react";
import Header from "../components/Header";
import stockImage from "../assets/stock.webp";
import stockvideo from "../assets/stock2.mp4";
import { MdContentPasteSearch } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { LiaOpencart } from "react-icons/lia";
import climbingImage from "../assets/climbing.jpg";
import Footer from "../components/Footer";
const LandingPage = () => {
  return (
    <>
      <section className="landingpage relative">
        <Header />
        <div className="landingImage">
          <video
            className="absolute top-0 w-full"
            src={stockvideo}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </section>
      <section className="z-10 flex text-white relative">
        <div className="z-20 mainheadline w-full">
          <h1 className="headline1">Market Screeners :</h1>
          <h2 className="headline2">
            Learning From <b className="stylehead">Market's Past</b>
          </h2>
          <img src={stockImage} style={{width:"30vw",paddingTop:"2vw"}} alt="" />
        </div>
      </section>
      <section className="getting-started">
        <div className="headline3">Getting &nbsp; <b className="stylehead">Started</b></div>
        <div>
          <div class="container-getting-started">
            <div class="gradient-cards">
              <div class="card-getting-started">
                <div class="container-card bg-green-box">
                  <p class="card-title">Search For Past Stocks</p>
                  <p class="card-description">
                    List of different stocks is attached to the documentation. 
                  </p>
                </div>
              </div>
              <div class="card-getting-started">
                <div class="container-card bg-white-box">
                  <p class="card-title">Analyse Stocks By Charts</p>
                  <p class="card-description">
                    Efficiently analyse your dream stocks.
                  </p>
                </div>
              </div>
              <div class="card-getting-started">
                <div class="container-card bg-yellow-box">
                  <p class="card-title">Buy Stocks With Efficient Way</p>
                  <p class="card-description">
                    Buy stocks that will help you grow in future.
                  </p>
                </div>
              </div>
              <div class="card-getting-started">
                <div class="container-card bg-blue-box">
                  <p class="card-title">Stay Updated With Current Market</p>
                  <p class="card-description">
                    See live stock details to stay updated with current market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="headline4">Giving A Through &nbsp; <b className="stylehead">Analysis</b></div>
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
      </section>
      <section className="climbing">
        <div className="flex justify-center align-items-center">
          <img
            className="absolute"
            src={climbingImage}
            style={{ width: "90vw" }}
            alt=""
          />
          <div className="z-20">
            <h1>Whatever the trade</h1>
            <h2>Analyse it</h2>
            <h2>Then leap</h2>
          </div>
        </div>
      </section>
      <section className="bg-transparent">
        <div className="tradeview">
          <h1>Trade with your</h1>
          <h1>#TradingView</h1>
        </div>
      </section>
      <section className="footersection">
        <div className="footer">
          <Footer/>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
