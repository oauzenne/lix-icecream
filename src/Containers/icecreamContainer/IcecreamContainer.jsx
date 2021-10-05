import React from "react";
import "./IcecreamContainer.css";

class IcecreamContainer extends React.Component {
  componentDidUpdate() {
    if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "" &&
      this.props.whipCherry === ""
    ) {
      this.props.setIcecreamImage("chocolate-grey-x");
    } else if (this.props.cone === "vanilla" && this.props.flavor === "") {
      this.props.setIcecreamImage("vanilla-grey-x");
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === ""
    ) {
      this.props.setIcecreamImage("chocolate-blanco-x");
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === ""
    ) {
      this.props.setIcecreamImage("vanilla-blanco-x");
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === ""
    ) {
      this.props.setIcecreamImage("chocolate-fudge-x");
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === ""
    ) {
      this.props.setIcecreamImage("vanilla-fudge-x");
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage("chocolate-blanco-whipCherry");
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === "no"
    ) {
      this.props.setIcecreamImage("chocolate-blanco-x");
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage("chocolate-fudge-whipCherry");
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === "no"
    ) {
      this.props.setIcecreamImage("chocolate-fudge-x");
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage("chocolate-blanco-whipCherry");
    } else if (
      this.props.cone === "chocolate" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === "no"
    ) {
      this.props.setIcecreamImage("chocolate-blanco-x");
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage("vanilla-fudge-whipCherry");
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "fudge" &&
      this.props.whipCherry === "no"
    ) {
      this.props.setIcecreamImage("vanilla-fudge-x");
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === "yes"
    ) {
      this.props.setIcecreamImage("vanilla-blanco-whipCherry");
    } else if (
      this.props.cone === "vanilla" &&
      this.props.flavor === "blanco" &&
      this.props.whipCherry === "no"
    ) {
      this.props.setIcecreamImage("vanilla-blanco-x");
    }
  }

  render() {
    return <div className="icecream-container">{this.props.icecreamImage}</div>;
  }
}

export default IcecreamContainer;
