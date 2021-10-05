import React from "react";
import "./IcecreamContainer.css";
import {
  chocolateBlancoWhipCherry,
  chocolateBlancoX,
  chocolateFudgeCherryWhip,
  chocolateFudgeX,
  chocolateGreyX,
  vanillaBlancowhipCherry,
  vanillaBlancoX,
  vanillaFudgeCherryWhip,
  vanillaFudgeX,
  vanillaGreyX,
  vanillaWhipCherry,
  chocolateWhipCherry,
} from "./images";

class IcecreamContainer extends React.Component {
  componentDidUpdate() {
    if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "" &&
      this.props.whipCherry === ""
    ) {
      this.props.setIcecreamImage(chocolateGreyX);
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "" &&
      this.props.whipCherry === ""
    ) {
      this.props.setIcecreamImage(vanillaGreyX);
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === ""
    ) {
      this.props.setIcecreamImage(chocolateBlancoX);
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === ""
    ) {
      this.props.setIcecreamImage(vanillaBlancoX);
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === ""
    ) {
      this.props.setIcecreamImage(chocolateFudgeX);
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === ""
    ) {
      this.props.setIcecreamImage(vanillaFudgeX);
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage(chocolateFudgeCherryWhip);
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === "no"
    ) {
      this.props.setIcecreamImage(chocolateFudgeX);
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage(chocolateBlancoWhipCherry);
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === "no"
    ) {
      this.props.setIcecreamImage(chocolateBlancoX);
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage(vanillaFudgeCherryWhip);
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === "no"
    ) {
      this.props.setIcecreamImage(vanillaFudgeX);
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage(vanillaBlancowhipCherry);
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === "no"
    ) {
      this.props.setIcecreamImage(vanillaBlancoX);
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "" &&
      this.props.whipCherry === "no"
    ) {
      this.props.setIcecreamImage(vanillaGreyX);
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage(vanillaWhipCherry);
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "" &&
      this.props.whipCherry === "no"
    ) {
      this.props.setIcecreamImage(chocolateGreyX);
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage(chocolateWhipCherry);
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage(chocolateWhipCherry);
    }
  }
  render() {
    return (
      <div className="icecream-container">
        <img
          src={this.props.icecreamImage}
          alt="icecream-image"
          className={
            this.props.whipCherry === "yes"
              ? "icecream-graphic-whip"
              : "icecream-graphic"
          }
        />
      </div>
    );
  }
}

export default IcecreamContainer;
