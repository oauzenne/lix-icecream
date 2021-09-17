import React from "react";
import "./Navbar.css";
import linkData from "./linkData.jsx";

class Navbar extends React.Component {
  state = {
    toggleMenu: false,
  };

  toggleNav = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu,
    });
  };

  render() {
    return (
      <div className="navbar-container ">
        <section className="navbar">
          {this.props.screenWidth > 871 &&
            linkData.map((link) =>
              link.path !== "/order" ? (
                window.location.pathname !== link.path ? (
                  <a href={link.path} className="navbar-item">
                    {link.name}
                  </a>
                ) : (
                  <a href={link.path} className="navbar-item-active">
                    {link.name}
                  </a>
                )
              ) : null
            )}

          {this.state.toggleMenu &&
            this.props.screenWidth < 871 &&
            linkData.map((link) =>
              link.name !== "Home" ? (
                link.path !== "/order" ? (
                  <a href={link.path} className="navbar-item">
                    {link.name}
                  </a>
                ) : (
                  <a href={link.path} className="navbar-item-order">
                    {link.name}
                  </a>
                )
              ) : (
                <a href={link.path} className="navbar-item-top">
                  {link.name}
                </a>
              )
            )}
          <button onClick={this.toggleNav} className="btn">
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </button>
        </section>
      </div>
    );
  }
}
export default Navbar;
