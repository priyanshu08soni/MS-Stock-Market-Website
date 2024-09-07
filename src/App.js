import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import LandingPage from './pages/LandingPage';
import Dashboard from "./pages/Dashboard";
import StockContext from "./context/StockContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [stockSymbol, setStockSymbol] = useState("FB");

  return (
    <>
    <BrowserRouter>
        <Routes>
          {/* By help of outlet we will using multiple routes in layout. */}
          <Route
            index
            element={
              <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
                  <LandingPage />
                </StockContext.Provider>
              </ThemeContext.Provider>
            }
          />
          <Route
            exact path="/dashboard"
            element={
              <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
                  <Dashboard />
                </StockContext.Provider>
              </ThemeContext.Provider>
            }
          />
          <Route
            exact path="/about"
            element={
              <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
                  <About />
                </StockContext.Provider>
              </ThemeContext.Provider>
            }
          />
          <Route
            exact path="/contact"
            element={
              <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
                  <Contact />
                </StockContext.Provider>
              </ThemeContext.Provider>
            }
          />
          <Route
            exact path="/docs"
            element={
              <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
                  <Documentation />
                </StockContext.Provider>
              </ThemeContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
