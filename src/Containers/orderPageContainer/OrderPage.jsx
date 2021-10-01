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

  const [cone, setCone] = React.useState("chocolate");
  const [flavor, setFlavor] = React.useState("");
  const [toppings, setToppings] = React.useState("");
  const [whipCherry, setWhipCherry] = React.useState("yes");
  const [total, setTotal] = React.useState(2.25);
  const [icecreamImage, setImage] = React.useState("placeholder");
  const [removeLastTopping, setRemoveLastTopping] = React.useState(false);

  const handleSetFlavor = (value) => {
    if (flavor === "") {
      setTotal(total + 2);
    } else {
      setTotal(total);
    }
    setFlavor(value);
  };

  const handleSetWhipCherry = (value) => {
    if (whipCherry === "yes" && value === "no") {
      setTotal(total - 1);
    } else if (whipCherry === "no" && value === "yes") {
      setTotal(total + 1);
    }
    setWhipCherry(value);
  };

  console.log(cone);
  console.log(flavor);
  console.log(total);
  console.log(toppings);
  console.log(whipCherry);
  console.log(icecreamImage);

  const handleSetToppings = (value) => {
    if (toppings.length === 0) {
      setTotal(total + 1);
    } else if (toppings.length === 1) {
      setTotal(total + 1);
      setRemoveLastTopping(true);
    } else if (toppings.length === 2) {
      setTotal(total - 1);
    }

    setToppings(value);
    console.log(removeLastTopping);

    console.log(toppings.length);

    if (toppings.length === 1 && removeLastTopping === true) {
      setTotal(total - 1);
      setRemoveLastTopping(false);
    }
  };

  return (
    <section className="order-container">
      <div className="order-contents">
        <div className="order-left">
          <div className="cone-type">
            <h2 className="order-header">BUILD YOUR CONE</h2>
            <h3 className="cone-header">What type of cone would you like?</h3>
            <div className="cone-type-image-container">
              {cone === "chocolate" ? (
                <img
                  src={chocolateConeType}
                  alt="choc-cone-type"
                  className="cone-type-image-active"
                  onClick={(e) => setCone("chocolate")}
                />
              ) : (
                <img
                  src={chocolateConeType}
                  alt="choc-cone-type"
                  className="cone-type-image"
                  onClick={(e) => setCone("chocolate")}
                />
              )}

              {cone === "vanilla" ? (
                <img
                  src={vanillaConeType}
                  alt="vanil-cone-type"
                  className="cone-type-image-active"
                  onClick={(e) => setCone("vanilla")}
                />
              ) : (
                <img
                  src={vanillaConeType}
                  alt="vanil-cone-type"
                  className="cone-type-image"
                  onClick={(e) => setCone("vanilla")}
                />
              )}
            </div>
            <div className="cone-type">
              <h3 className="icecream-header-first">
                What type of icecream are you craving?
              </h3>
              <Select
                className="order-select"
                placeholder="Mmm... delicious"
                options={icecreamOptions}
                onChange={(values) => handleSetFlavor(values[0].value)}
                // onChange={(values) => setFlavor(values[0].value)}
              />
            </div>
            <div className="cone-type">
              <h3 className="icecream-header">Favorite toppings?</h3>
              <Select
                className="order-select"
                multi
                options={toppingOptions}
                placeholder="Toppings"
                onChange={(values) =>
                  handleSetToppings(values.map((v) => v.value))
                }
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
                  // name="yes"
                  // id="yes"
                  onClick={(e) => handleSetWhipCherry("yes")}
                  checked={whipCherry === "yes"}
                />
                <label className="text-whipped" for="show">
                  Yes
                </label>

                <input
                  type="radio"
                  value="no"
                  // name="no"
                  // id="no"
                  onClick={(e) => handleSetWhipCherry("no")}
                  // onClick={this.handleChange}
                  checked={whipCherry === "no"}
                />
                <label className="text-whipped" for="hide">
                  No
                </label>
              </form>
            </div>
            <div className="total-submit">
              <h3 className="total-text">
                Total:{" "}
                <span style={{ color: "#03BDAA", marginLeft: "10px" }}>
                  ${total}
                </span>
              </h3>
              {flavor !== "" ? (
                <input type="submit" className="form-submit-order" />
              ) : (
                <input type="submit" className="form-submit-order-disabled" />
              )}
            </div>
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
