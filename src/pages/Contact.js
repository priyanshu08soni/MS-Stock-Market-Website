import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
            <h1 className="headlines mt-5 ms-4">#Contact</h1>
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

export default Contact;
