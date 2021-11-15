import { useState } from "react";
const useGlobalStore = () => {
  const [state, setState] = useState({
    value: [],
    list: [],
  });
  const actions = (action) => {
    const { type, payload } = action;
    switch (type) {
      case "setState":
        return setState(payload);
      case "addProduct":
        if (
          state.value
            .map((value) => value.producto.id)
            .includes(payload.value.producto.id)
        ) {
          payload.value = [
            ...state.value.map((value) => {
              if (value.producto.id === payload.value.producto.id) {
                value.cantidad = payload.value.cantidad;
              }
              return value;
            }),
          ];
        } else {
          payload.value = [...state.value, payload.value];
        }
        alert("Product Added!");
        return setState(payload);
      case "updateQuantity":
        payload.value = [
          ...state.value.map((value) => {
            if (value.producto.id === payload.value.id) {
              value.cantidad = payload.value.cantidad;
            }
            return value;
          }),
        ];
        return setState(payload);
      case "removeProduct":
        payload.value = [
          ...state.value.filter(
            (value) => value.producto.id !== payload.value.id
          ),
        ];
        alert("Product Removed!");
        return setState(payload);
      default:
        return state;
    }
  };
  return { state, actions };
};
export default useGlobalStore;
