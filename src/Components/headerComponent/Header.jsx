import React, {useState, useEffect} from "react";
import "./Header.css";
import Navbar from "../navbarComponent";
import Logo from "./logo.png";

  const Header = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])

    return (
      <section className="header">
        <section className="header-top">
          <section className="header-top__logo">
            <img src={Logo} href="/" alt="brand-logo" className="header-logo" />
          </section>
          <section className="header-top__navbar">
            <section className="header-top__navigation">
              <Navbar screenWidth={screenWidth}/>
              <button href="/login" className="login-button">
                Log In
              </button>
            </section>
          </section>
        </section>
      </section>
    );
  };

export default Header;
