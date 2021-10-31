import React from "react";
import pageLogo from "../assets/images/pngwing.com.png";
import lupaLogo from "../assets/logos/lupa.png";
import shoppingCartLogo from "../assets/images/shopping-cart.png";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="pageHeader">
        <div className="logoContainer" onClick={this.props.prop_goToHomePage}>
          <img className="logo--md" src={pageLogo} alt="pageLogo" />
        </div>
        <div className="top-menu">
          <div className="menu-elements">
            <div className="menu-element">
              <img
                src={shoppingCartLogo}
                className="logo--md inverted-color"
                alt="shopping-cart-logo"
              ></img>
            </div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              className="form-input"
              placeholder="Search here.."
            ></input>
            <button className="form-input search-button">
              <img src={lupaLogo} className="logo" alt="lupa-logo"></img>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
