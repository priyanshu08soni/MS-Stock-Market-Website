import React, { useContext } from "react";
import { TrendingUp, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeContext from "../context/ThemeContext";

export default function LandingPage() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-neutral-900"}`}>
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className={`absolute inset-0 pointer-events-none ${darkMode ? "opacity-30" : "opacity-20"}`}>
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl px-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Trade Smarter.
          </h1>
          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-8 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
            Learn From <span className="text-indigo-500">Market’s Past</span>
          </h2>

          <p className={`mt-6 text-xl max-w-2xl mx-auto leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
            Advanced stock screeners, interactive charts, and predictive
            analytics — all in one powerful, beautifully designed platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition font-semibold shadow-lg shadow-indigo-500/30 transform hover:-translate-y-1">
              Get Started Now
            </button>
            <button className={`px-8 py-4 rounded-full border transition font-medium backdrop-blur-sm ${darkMode
              ? "border-neutral-700 hover:bg-neutral-800 text-white"
              : "border-neutral-300 hover:bg-white/50 text-neutral-800"
              }`}>
              View Documentation
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Why Choose <span className="text-indigo-500">Market Screeners</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: <TrendingUp size={32} />,
              title: "Stock Screeners",
              desc: "Search and filter historical stocks with precision."
            }, {
              icon: <BarChart3 size={32} />,
              title: "Interactive Charts",
              desc: "Analyze trends with real-time visual insights."
            }, {
              icon: <Zap size={32} />,
              title: "Predictive Analytics",
              desc: "Forecast movements using data-driven models."
            }, {
              icon: <ShieldCheck size={32} />,
              title: "Reliable Data",
              desc: "Clean, structured, and trustworthy market data."
            }].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`rounded-3xl p-8 backdrop-blur-md shadow-md transition-all ${darkMode
                  ? "bg-slate-800/50 hover:bg-slate-800/80"
                  : "bg-white hover:bg-gray-50"
                  }`}
              >
                <div className="p-3 bg-indigo-500/10 rounded-2xl w-fit mb-6 text-indigo-500">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className={`py-32 px-6 ${darkMode ? "bg-slate-900/30" : "bg-gray-200/30"}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Deep Market Analysis</h2>
          <p className={`text-lg max-w-2xl mx-auto mb-16 ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}>
            From raw data to meaningful insights — everything you need to make
            smarter investment decisions in a clean, distraction-free environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Technical Indicators", "Historical Data Tables", "User Friendly Interface"].map((t, i) => (
              <div
                key={i}
                className={`rounded-3xl p-10 backdrop-blur-sm ${darkMode
                  ? "bg-slate-800/50"
                  : "bg-white"
                  }`}
              >
                <h3 className="text-2xl font-bold mb-4">{t}</h3>
                <p className={`text-sm ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}>
                  Designed to help both beginners and advanced traders understand the market with ease.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Whatever the Trade</h2>
          <p className={`text-xl mb-10 ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}>Analyze it. Understand it. Then leap.</p>
          <button className="px-10 py-5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition font-bold shadow-2xl hover:shadow-indigo-500/50 text-lg">
            Start Trading Smart
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
