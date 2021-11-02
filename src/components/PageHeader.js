import React, { useState } from "react";
import pageLogo from "../assets/images/pngwing.com.png";
import lupaLogo from "../assets/logos/lupa.png";
import shoppingCartLogo from "../assets/images/shopping-cart.png";

function PageHeader() {
  const [searchTerm, setSearchTerm] = useState("");
  const textInputFunction = function (value) {
    const text = value.target.value.toLowerCase().trim();
    setSearchTerm(text);
  };
  return (
    <div className="pageHeader">
      <div className="logoContainer">
        <a href="/home">
          <img className="logo--md" src={pageLogo} alt="pageLogo" />
        </a>
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
          <a href={`/searchResultsPage/${searchTerm}`}>
            <button className="form-input search-button">
              <img src={lupaLogo} className="logo" alt="lupa-logo"></img>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
