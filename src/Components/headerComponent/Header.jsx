import React, { useState, useEffect } from "react";
import "./Header.css";
import Navbar from "../navbarComponent";
import Logo from "./logo.png";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <section className="header-container">
      <div className="header-top__logo">
        <img src={Logo} href="/" alt="brand-logo" className="header-logo" />
      </div>

      <div className="header-top__navigation">
        <div className="test-1">
          <Navbar screenWidth={screenWidth} />
        </div>
        <div className="test-2">
          <a href="/order" className="order-link">
          <button className="order-button">Order Now!</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
