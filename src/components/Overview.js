import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import SearchResult from "./SearchResult";
import { mockSearchResults } from "../sample-data/mock";
const Overview = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  const updateBestMatches = async () => {
    setBestMatches(mockSearchResults.result);
  };
  return (
    <>
      <div
        className={`w-full h-full card d-flex flex-col justify-center rounded-md relative pb-5 pt-5  custom-scrollbar bg-transparent
        }`}
        style={{ color: "gray", overflow: "auto" }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <h1 style={{ fontSize: "2.5vw" }}>Search for your stock details</h1>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div class="form__group field">
            <input
              type="text"
              id="search"
              value={input}
              className={`w-full form__field focus:outline-none shadow-md ${
                darkMode ? "bg-gray-700" : "text-black"
              }`}
              placeholder="Search stock ... and press enter"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={() => {
                  updateBestMatches();
              }}
      
            />
            <label for="name" class="form__label">
              <h1>Search</h1>
            </label>
            {input && bestMatches.length > 0 ? (
              <SearchResult results={bestMatches} setInput={setInput} input={input} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
