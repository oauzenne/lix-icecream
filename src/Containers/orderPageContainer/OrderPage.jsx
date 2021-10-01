import React from "react";
import "./OrderPage.css";
import pinkAbstract from "./pinkAbstract.png";
import chocolateConeType from "./icecreamImages/chocolate-cone-type.png";
import vanillaConeType from "./icecreamImages/vanilla-cone-type.png";
import Select from "react-dropdown-select";

const OrderPage = () => {
  const icecreamOptions = [
    { label: "Blanco Cream", value: "blanco" },
    { label: "Fudge", value: "fudge" },
  ];

  const toppingOptions = [
    { label: "Sprinkles", value: "sprinkles" },
    { label: "Caramel", value: "caramel" },
  ];

  return (
    <section className="order-container">
      <div className="order-contents">
        <div className="order-left">
          <div className="cone-type">
            <h2 className="order-header">BUILD YOUR CONE</h2>
            <h3 className="cone-header">What type of cone would you like?</h3>
            <div className="cone-type-image-container">
              <img
                src={chocolateConeType}
                alt="choc-cone-type"
                className="cone-type-image"
              />
              <img
                src={vanillaConeType}
                alt="vanil-cone-type"
                className="cone-type-image"
              />
            </div>
            <div className="cone-type">
              <h3 className="icecream-header-first">
                What type of icecream are you craving?
              </h3>
              <Select
                className="order-select"
                placeholder="Mmm... delicious"
                options={icecreamOptions}
              />
            </div>
            <div className="cone-type">
              <h3 className="icecream-header">Favorite toppings?</h3>
              <Select
                className="order-select"
                multi
                options={toppingOptions}
                placeholder="Toppings"
              />
            </div>

            <div className="cone-type">
              <h3 className="icecream-header">
                Whipped cream and cherry on top?
              </h3>
              <form>
                <input
                  type="radio"
                  value="yes"
                  name="yes"
                  id="yes"
                  // onClick={this.handleChange}
                  // checked={this.state.selected === "show"}
                />
                <label className="text-whipped" for="show">
                  Yes
                </label>

                <input
                  type="radio"
                  value="no"
                  name="no"
                  id="no"
                  // onClick={this.handleChange}
                  // checked={this.state.selected === "hide"}
                />
                <label className="text-whipped" for="hide">
                  No
                </label>
              </form>
            </div>
            <div className="total-submit"><h3 className="total-text">Total: $11.11</h3>
            <input
              type="submit"
              className="form-submit-order"
            /></div>
            
          </div>
        </div>
        <div className="order-right">
          <img
            src={pinkAbstract}
            alt="pink-abstract"
            className="pink-abstract-image"
          />
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
