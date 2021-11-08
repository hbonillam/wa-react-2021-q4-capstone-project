import React, { useContext } from "react";
import Context from "../../store/context";
import { NavLink } from "react-router-dom";
function Checkout() {
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
    <div className="product-detail">
      <h2>Checkout</h2>
      <div>
        <table className="details-table">
          <thead>
            <tr>
              <th colSpan="2">Customer data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name: </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>E-mail: </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Post/Zip Code: </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Order Notes: </td>
              <td>
                <textarea />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="details-table">
          <thead>
            <tr>
              <th colSpan="3">Order Summary</th>
            </tr>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {state.value.map((item) => {
              return (
                <tr>
                  <td>{item.producto.data?.name}</td>
                  <td>{item.cantidad}</td>
                  <td>
                    $
                    {parseFloat(
                      Math.round(
                        item.producto.data?.price * item.cantidad * 100
                      ) / 100
                    ).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="3">
                <hr />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <b>Total: </b>
              </td>
              <td>{calcularTotal(state.value)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button className="green-button">Place Order</button>
        <br />
        <NavLink to="/cart" activeClassName="active-link" exact>
          <button className="green-button">Go Back to Cart</button>
        </NavLink>
      </div>
    </div>
  );
}
export default Checkout;
