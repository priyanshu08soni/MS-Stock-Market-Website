import React from "react";
import Header from "../components/Header";
import stockImage from "../assets/stock.webp";
import stockvideo from "../assets/stock2.mp4";
import { MdContentPasteSearch } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { LiaOpencart } from "react-icons/lia";
import climbingImage from "../assets/climbing.jpg";
import Footer from "../components/Footer";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const LandingPage = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode?"bg-black":"bg-gray-800"}`}>
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
          <img src={stockImage} className="stockImage" style={{paddingTop:"2vw"}} alt="" />
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
        <section class="design-section mt-2">
              <div class="timeline">
                <div class="timeline-component timeline-content">
                  <h3 className="font-extrabold text-xl pb-3 text-gray-600" >Interactive Charts and Graphs</h3>
                  <p>
                    Visualize stock performance trends over time with our
                    interactive charts. We provide clear and detailed graphs
                    that help you track price movements, volume changes, and
                    market fluctuations, allowing for easy comparison and
                    analysis.
                  </p>
                </div>
                <div class="timeline-middle">
                  <div class="timeline-circle"></div>
                </div>
                <div class="timeline-empty"></div>

                <div class="timeline-empty"></div>
                <div class="timeline-middle">
                  <div class="timeline-circle"></div>
                </div>
                <div class="timeline-component timeline-content">
                  <h3 className="font-extrabold text-xl pb-3 text-gray-600" >Data-Driven Insights</h3>
                  <p>
                    Our platform uses a rich dataset to calculate key financial
                    metrics, such as moving averages, RSI, and more. These
                    metrics are presented in easy-to-read tables, giving you a
                    deeper understanding of stock behavior and helping you
                    identify potential investment opportunities.
                  </p>
                </div>

                <div class=" timeline-component timeline-content">
                  <h3 className="font-extrabold text-xl pb-3 text-gray-600" >Predictive Analytics</h3>
                  <p>
                    By analyzing historical data, our algorithms can predict
                    future market trends, providing you with a forward-looking
                    perspective on stock performance. This helps you stay ahead
                    of the market and make proactive investment decisions.
                  </p>
                </div>

                <div class="timeline-middle">
                  <div class="timeline-circle"></div>
                </div>
                <div class="timeline-empty"></div>

                <div class="timeline-empty"></div>
                <div class="timeline-middle">
                  <div class="timeline-circle"></div>
                </div>

                <div class="timeline-component timeline-content">
                  <h3 className="font-extrabold text-xl pb-3 text-gray-600" >Comprehensive Tables</h3>
                  <p>
                    Our detailed tables include essential data such as open,
                    high, low, close prices, and trading volumes, offering you a
                    complete picture of each stock's daily performance.
                  </p>
                </div>
                <div class=" timeline-component timeline-content">
                  <h3 className="font-extrabold text-xl pb-3 text-gray-600" >User-Friendly Interface</h3>
                  <p>
                    Our platform is designed with simplicity in mind, making it
                    easy for both novice and experienced investors to navigate
                    and utilize the data.
                  </p>
                </div>
                <div class="timeline-middle">
                  <div class="timeline-circle"></div>
                </div>
                <div class="timeline-empty"></div>
              </div>
        </section>
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
        <div className="footer" style={{
            border: darkMode
              ? "3px solid rgba(255, 255, 255, 0.247)"
              : "3px solid rgba(34, 85, 195, 0.247)",
          }}>
          <Footer/>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
