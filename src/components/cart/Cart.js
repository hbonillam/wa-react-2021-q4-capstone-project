import React, { useContext } from "react";
import Context from "../../store/context";
import CartListItem from "./CartListItem";
import { NavLink } from "react-router-dom";

function Cart() {
  const { state } = useContext(Context);
  const calcularTotal = function (lista) {
    let total = "$0.00";
    let acumulador = 0;
    lista?.forEach((item) => {
      acumulador += item.cantidad * item.producto.data?.price;
    });
    total =
      "$" +
      parseFloat(Math.round(acumulador * 100) / 100).toLocaleString("en-US", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      });
    return total;
  };
  return (
    <div>
      <div className="search-result-list">
        {state.value.map((value) => {
          return (
            <CartListItem item={value} key={value.producto.id}></CartListItem>
          );
        })}
      </div>
      <div className="cart-total">
        <span>
          <b>Total:</b>
          {calcularTotal(state.value)}
        </span>
        <br />
        <NavLink to="/checkout" activeClassName="active-link" exact>
          <button className="green-button">Proceed to checkout</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Cart;
