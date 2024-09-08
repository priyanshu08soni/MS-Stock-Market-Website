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
        className={`w-full h-full card d-flex flex-col justify-center rounded-md relative border-2 shadow-md pb-5 pt-3 custom-scrollbar ${
          darkMode ? "bg-gray-900 border-gray-800" : "bg-blue-100 border-blue-100"
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
              className={`w-full form__field px-4 focus:outline-none rounded-md shadow-md ${
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
