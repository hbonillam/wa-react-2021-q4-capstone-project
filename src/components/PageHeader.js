import React, { useState } from "react";
import pageLogo from "../assets/images/pngwing.com.png";
import lupaLogo from "../assets/logos/lupa.png";
import shoppingCartLogo from "../assets/images/shopping-cart.png";
import { NavLink } from "react-router-dom";

function PageHeader() {
  const [searchTerm, setSearchTerm] = useState("");
  const textInputFunction = function (value) {
    const text = value.target.value.toLowerCase().trim();
    setSearchTerm(text);
  };
  return (
    <div className="pageHeader">
      <div className="logoContainer">
        <NavLink to="/home" activeClassName="active-link" exact>
          <img className="logo--md" src={pageLogo} alt="pageLogo" />
        </NavLink>
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
            onChange={textInputFunction}
          ></input>
          <NavLink
            to={`/searchResultsPage/${searchTerm}`}
            activeClassName="active-link"
            exact
          >
            <button className="form-input search-button">
              <img src={lupaLogo} className="logo" alt="lupa-logo"></img>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
