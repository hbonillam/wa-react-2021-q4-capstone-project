import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../store/context";

function GridCell({ featuredProduct }) {
  const { state, actions } = useContext(Context);
  const addProductToCart = function (product) {
    actions({ type: "addProduct", payload: { ...state, value: product } });
  };
  return (
    <div className="gridcell-component">
      <div>
        <img
          src={featuredProduct.data?.mainimage.url}
          className="gridcell-image"
          alt={featuredProduct.data?.name}
        />
      </div>
      <div className="gridcell-data">
        <span>
          <b>Nombre: </b>
          {featuredProduct.data?.name}
        </span>
        <br />
        <span>
          <b>Categoria: </b>
          {featuredProduct.data?.category.slug}
        </span>
        <br />
        <span>
          <b>Precio: </b>$
          {featuredProduct.data?.price.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
      <hr />
      <div className="gridcell-bottom">
        <button
          className="gridcell-button"
          onClick={() => {
            addProductToCart({ producto: featuredProduct, cantidad: 1 });
          }}
          disabled={featuredProduct.data.stock === 0}
        >
          Add to Cart
        </button>
        <br />
        <NavLink
          className="gridcell-link"
          to={`product/${featuredProduct.id}`}
          activeClassName="active-link"
          exact
        >
          <button className="gridcell-button">See detail</button>
        </NavLink>
      </div>
      <br />
    </div>
  );
}

export default GridCell;
