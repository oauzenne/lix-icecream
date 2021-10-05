import React from "react";
import "./OrderPage.css";
import pinkAbstract from "./pinkAbstract.png";
import chocolateConeType from "./icecreamImages/chocolate-cone-type.png";
import vanillaConeType from "./icecreamImages/vanilla-cone-type.png";
import Select from "react-dropdown-select";
import IcecreamContainer from "../icecreamContainer/IcecreamContainer";
import { chocolateGreyX } from "../icecreamContainer/images/";

const OrderPage = () => {
  const icecreamOptions = [
    { label: "Butter Creama", value: "blanco" },
    { label: "Fudge", value: "fudge" },
  ];

  const [cone, setCone] = React.useState("chocolate");
  const [flavor, setFlavor] = React.useState("");
  const [whipCherry, setWhipCherry] = React.useState("");
  const [total, setTotal] = React.useState(2.25);
  const [icecreamImage, setImage] = React.useState(chocolateGreyX);

  const handleSetFlavor = (value) => {
    if (flavor === "") {
      setTotal(total + 2);
    } else {
      setTotal(total);
    }
    setFlavor(value);
  };

  const handleSetWhipCherry = (value) => {
    if (whipCherry === "" && value === "no") {
      setTotal(total);
    } else if (whipCherry === "yes" && value === "no") {
      setTotal(total - 1);
    } else if (whipCherry === "no" && value === "yes") {
      setTotal(total + 1);
    } else if (whipCherry === "" && value === "yes") {
      setTotal(total + 1);
    }
    setWhipCherry(value);
  };

  const setIcecreamImage = (image) => {
    setImage(image);
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
                  onClick={(e) => handleSetWhipCherry("yes")}
                  checked={whipCherry === "yes"}
                />
                <label className="text-whipped" for="show">
                  Yes
                </label>

                <input
                  type="radio"
                  value="no"
                  onClick={(e) => handleSetWhipCherry("no")}
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
              {flavor !== "" && whipCherry !== "" ? (
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
          <IcecreamContainer
            cone={cone}
            flavor={flavor}
            whipCherry={whipCherry}
            icecreamImage={icecreamImage}
            setIcecreamImage={setIcecreamImage}
          />
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
