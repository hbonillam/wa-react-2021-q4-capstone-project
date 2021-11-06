import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../utils/hooks/useProduct";
import ImageSwiper from "./ImageSwiper.jsx";

function ProductDetail() {
  const { productId } = useParams();
  const response = useProduct(productId);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (!response.isLoading && response?.data?.results?.length > 0) {
      setProduct(response.data.results[0]);
    }
  }, [response]);
  console.log(product);
  return (
    <div>
      {product && (
        <div>
          <div className="swiper-container">
            <ImageSwiper images={product.data.images}></ImageSwiper>
          </div>
          <table>
            <thead>
              <tr>
                <td>
                  <b>Nombre: </b>
                </td>
                <td>
                  <span>{product.data.name}</span>
                </td>
              </tr>
            </thead>
            <tbody>
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
            <input type="number" min="1" max="10"></input>
            <button>Add to cart!</button>
          </div>
          <table>
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
