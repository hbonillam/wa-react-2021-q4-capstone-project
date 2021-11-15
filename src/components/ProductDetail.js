import React, { useEffect, useState, useContext } from "react";
import Context from "../store/context";
import { useParams } from "react-router-dom";
import { useProduct } from "../utils/hooks/useProduct";
import ImageSwiper from "./ImageSwiper.jsx";

function ProductDetail() {
  const { state, actions } = useContext(Context);
  const { productId } = useParams();
  const response = useProduct(productId);
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  useEffect(() => {
    if (!response.isLoading && response?.data?.results?.length > 0) {
      setProduct(response.data.results[0]);
    }
  }, [response]);
  useEffect(() => {
    const listaItem = state.value?.filter(
      (item) => item.producto.id === product?.id
    );
    if (listaItem.length > 0) {
      setCantidad(parseInt(listaItem[0].cantidad));
    }
  }, [product, state.value]);
  const addProductToCart = function (product) {
    console.log("anadiendo");
    actions({ type: "addProduct", payload: { ...state, value: product } });
  };
  return (
    <div className="product-detail">
      {product && (
        <div>
          <div className="swiper-container">
            <ImageSwiper images={product.data.images}></ImageSwiper>
          </div>
          <table className="details-table">
            <thead>
              <tr>
                <th colSpan="2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Nombre: </b>
                </td>
                <td>
                  <span>{product.data.name}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Precio: </b>
                </td>
                <td>
                  <span>
                    $
                    {product.data.price.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>SKU: </b>
                </td>
                <td>
                  <span>{product.data.sku}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Category: </b>
                </td>
                <td>
                  <span>{product.data.category.slug}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Tags: </b>
                </td>
                <td>
                  <ul>
                    {product.tags.map((tag, indice) => (
                      <li key={indice}>
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Description:</b>
                </td>
                <td>
                  <p>
                    {product.data.description.map((description, indice) => (
                      <span key={indice}>{description.text}</span>
                    ))}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <input
              type="number"
              min="1"
              max={product.data.stock}
              defaultValue={cantidad}
              key={cantidad}
              onChange={(e) => {
                setCantidad(e.target.value);
              }}
              disabled={product.data.stock === 0}
              className="form-input"
            ></input>
            <button
              className="form-input-button"
              onClick={() => {
                addProductToCart({ producto: product, cantidad: cantidad });
              }}
              disabled={product.data.stock === 0}
            >
              Add to cart!
            </button>
          </div>
          <table className="details-table">
            <thead>
              <tr>
                <th colSpan="2">Specs</th>
              </tr>
            </thead>
            <tbody>
              {product.data.specs.map((spec, indice) => (
                <tr key={indice}>
                  <td>
                    <b>{spec.spec_name}: </b>
                  </td>
                  <td>{spec.spec_value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
