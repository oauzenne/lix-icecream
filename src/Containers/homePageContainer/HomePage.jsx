import React from "react";
import Splash from "./splashImage.png";
import LineBreak from "./squiggleImage.png";
import FacebookIcon from "./facebookIcon.png";
import InstagramIcon from "./instagramIcon.png";
import PinterestIcon from "./pinterestIcon.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="home-outer">
      <section className="home-inner">
        <section className="home-content">
          <h1> Ready for yummy?</h1>
          <h2>We have the perfect cone for you!</h2>
          <img src={LineBreak} alt="line-squiggle" className="squiggle-image" />
          <h3>
            Order your cone online and pick up your delcious treat lickety
            split! Our icecream is organic and we source our products from local
            farmers and vendors!
          </h3>
          <section className="test">
            <img src={Splash} alt="icecream-splash" className="splash-image" />
          </section>
          <section>
            <a href="/about">
              <button className="about-button">Learn More</button>
            </a>
            <a href="/order">
              <button className="build-button">Build my cone!</button>
            </a>
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
          </section>
        </section>
      </section>
    </section>
  );
};

export default HomePage;
