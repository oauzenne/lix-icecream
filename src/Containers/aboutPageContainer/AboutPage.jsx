import React from "react";
import "./AboutPage.css";
import TopImage from "./topImage.png";
import OwnerImage from "./ownerImage.png";

const AboutPage = () => {
  return (
    <section className="about-container">
      <div className="about-top">
        <img
          src={TopImage}
          alt="icecream-header"
          className="icecream-header-image"
        />
      </div>
      <div className="about-mid">
        <h2>The Lix Story</h2>
      </div>
      <div className="about-bottom">
        <div className="about-bottom-left">
          <p>
            Ever since I was a little girl, I always loved going to get icecream
            with my family. It was always a time full joy and happiness. After
            growing up and realizing how "the world works", I realized that
            there were so many people that were sad and unhappy, and I knew that
            I wanted to do something about it. So, I opened up Lix Icecream to
            spread the joy that comes from your very first lick of your favorite
            icecream!
            <br />
            <br />
            Ever since 2015, we've been serving up delicious icecream cones -
            over 200,000 cones to date! Because we LOVE our customers, and we
            value convenience - especially during these busy times - our
            icecream parlor allows for pickup service!
            <br />
            <br />
            Simply, order your cone online and pick it up in 15 minutes -
            there's no waiting for your creamy deliciousness!
            <br />
            <br />
            Our icecream is:
            <br />
            <ul>
              <li>Organic</li>
              <li>Homemade</li>
              <li>Gluten-free</li>
              <li>Nut-free</li>
              <li>Made with love</li>
            </ul>
            <br />
            When you order a cone at Lix Icecream, know that you are doing a
            good deed! For every cone served, we donate a meal to a child in
            need.
            <br />
            <br />
            Awesome service is our number one goal so you'll often find me at
            the parlor helping to scoop up icecream!
          </p>
        </div>
        <div className="about-bottom-right">
          <img
            src={OwnerImage}
            alt="icecream-owner"
            className="icecream-owner-image"
          />
          <h3>Sarah Owens, Founder</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
