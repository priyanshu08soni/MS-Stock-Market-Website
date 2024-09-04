import React from "react";
import Footer from "../components/Footer";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import Header from "../components/Header";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode?"bg-black":"bg-red-300"}`}>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <h1 className="headlines mt-5 ms-4" style={{color:darkMode?" rgba(255, 255, 255, 0.119)":"rgba(0, 0, 0, 0.3)"}}>#About</h1>
          <div>
            <div className="about-text ms-4 my-4 font-extrabold text-xl text-gray-600">
              Welcome to our stock market analysis platform, where we harness
              the power of data to help you make informed investment decisions.
              Leveraging the Nifty-50 Kaggle dataset, we provide comprehensive
              insights into the Indian stock market, specifically focusing on
              the Nifty-50 index.
            </div>
            <h1 className="headlines mt-5 ms-4" style={{color:darkMode?" rgba(255, 255, 255, 0.119)":"rgba(0, 0, 0, 0.3)"}}>#WhatWeOffer :</h1>
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
            <div className="about-text ms-4 my-4 px-1 font-extrabold text-xl text-gray-600">
              Whether you're a seasoned investor or just starting out, our platform equips you with the tools and data needed to make confident investment choices. Explore the dynamic world of stock trading with us and take your investment strategy to the next level.
            </div>
          </div>
        </div>
      </div>
      <section className="footersection">
        <div className="footer" style={{
            border: darkMode
              ? "3px solid rgba(255, 255, 255, 0.247)"
              : "3px solid rgba(34, 85, 195, 0.247)",
          }} >
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default About;
