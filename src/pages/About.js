import React from "react";
import Footer from "../components/Footer";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import Header from "../components/Header";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
            <h1 className="headlines mt-5 ms-4">#About</h1>
            <div></div>
        </div>
      </div>
      <section className="footersection fixed-bottom">
        <div className="footer">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default About;
