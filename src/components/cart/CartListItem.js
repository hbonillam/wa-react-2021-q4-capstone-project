import React, { useContext } from "react";
import Context from "../../store/context";

function CartListItem({ item }) {
  const { state, actions } = useContext(Context);
  const actualizarCantidadProducto = function (id, cantidad) {
    actions({
      type: "updateQuantity",
      payload: { ...state, value: { id: id, cantidad: cantidad } },
    });
  };
  const quitarProducto = function (id) {
    actions({
      type: "removeProduct",
      payload: { ...state, value: { id: id } },
    });
  };
  return (
    <div className="cart-item">
      <div>
        <img
          src={item.producto.data?.mainimage.url}
          className="search-result-item-img"
          alt={item.producto.data?.name}
        />
      </div>
      <div>
        <span>
          <b>Name: </b>
          {item.producto.data?.name}
        </span>
        <br />
        <span>
          <b>Unit Price: </b>$
          {parseFloat(
            Math.round(item.producto.data?.price * 100) / 100
          ).toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </span>
        <br />
        <span>
          <b>Cantidad: </b>
        </span>
        <input
          type="number"
          defaultValue={item.cantidad}
          min="1"
          max={item.producto.data.stock}
          onChange={(e) => {
            actualizarCantidadProducto(item.producto.id, e.target.value);
          }}
        ></input>
        <br />
        <span>
          <b>Subtotal: </b>$
          {parseFloat(
            Math.round(item.producto.data?.price * item.cantidad * 100) / 100
          ).toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </span>
        <br />
        <button
          className="green-button"
          onClick={() => {
            quitarProducto(item.producto.id);
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CartListItem;
