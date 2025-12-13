import React, { useContext } from "react";
import Footer from "../components/Footer";
import ThemeContext from "../context/ThemeContext";
import Header from "../components/Header";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-slate-900 text-gray-100" : "bg-gray-100 text-gray-800"}`}>
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          #About
        </h1>

        <div className={`p-8 rounded-3xl shadow-md backdrop-blur-sm mb-12 ${darkMode ? "bg-slate-800/50" : "bg-white"}`}>
          <p className="text-xl leading-relaxed opacity-90">
            Welcome to our stock market analysis platform, where we harness
            the power of data to help you make informed investment decisions.
            Leveraging the Nifty-50 Kaggle dataset, we provide comprehensive
            insights into the Indian stock market, specifically focusing on
            the Nifty-50 index.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8 opacity-90">What We Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {[
            { title: "Interactive Charts", desc: "Visualize stock performance trends over time with our interactive charts..." },
            { title: "Data-Driven Insights", desc: "Our platform uses a rich dataset to calculate key financial metrics..." },
            { title: "Predictive Analytics", desc: "By analyzing historical data, our algorithms can predict future market trends..." },
            { title: "Comprehensive Tables", desc: "Our detailed tables include essential data such as open, high, low, close prices..." },
            { title: "User-Friendly Interface", desc: "Our platform is designed with simplicity in mind, making it easy for anyone." }
          ].map((item, index) => (
            <div key={index} className={`p-8 rounded-2xl backdrop-blur-md shadow-md transition hover:-translate-y-1 hover:shadow-lg ${darkMode ? "bg-slate-800/50" : "bg-white"}`}>
              <h3 className="text-xl font-bold text-indigo-500 mb-3">{item.title}</h3>
              <p className="opacity-80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto opacity-75 text-lg italic">
          "Whether you're a seasoned investor or just starting out, our platform equips you with the tools and data needed to make confident investment choices."
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
