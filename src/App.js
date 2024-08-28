import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import LandingPage from './pages/LandingPage';
import Dashboard from "./pages/Dashboard";
import StockContext from "./context/StockContext";


function App() {
  const [darkMode, setDarkMode] = useState(false);
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
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
