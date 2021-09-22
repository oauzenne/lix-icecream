import React from "react";
import Splash from "./splashImage.png";
import LineBreak from "./squiggleImage.png";
import FacebookIcon from "./facebookIcon.png";
import InstagramIcon from "./instagramIcon.png";
import PinterestIcon from "./pinterestIcon.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="home-container">
      <div className="home-left">
        <h1> Ready for yummy?</h1>
        <h2>We have the perfect cone for you!</h2>
        <img src={LineBreak} alt="line-squiggle" className="squiggle-image" />
        <h3>
          Order your cone online and pick up your delcious treat lickety split!
          Our icecream is organic and we source our products from local farmers
          and vendors!
        </h3>
        <div className="buttons">
          <a href="/about">
            <button className="about-button">Learn More</button>
          </a>
          <a href="/order">
            <button className="build-button">Build my cone!</button>
          </a>
        </div>

        <div className="social-links">
          <a href="https://facebook.com">
            <img
              src={FacebookIcon}
              alt="facebook-splash"
              className="facebook-image"
            />
          </a>
          <a href="https://instagram.com">
            <img
              src={InstagramIcon}
              alt="instagram-splash"
              className="instagram-image"
            />
          </a>
          <a href="https://pinterest.com">
            <img
              src={PinterestIcon}
              alt="pinterest-splash"
              className="pinterest-image"
            />
          </a>
        </div>
      </div>

      <div className="home-right">
        <img src={Splash} alt="icecream-splash" className="splash-image" />
      </div>
    </section>
  );
};

export default HomePage;
