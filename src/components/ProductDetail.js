import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { useProduct } from "../utils/hooks/useProduct";

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
          <table>
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
                  {product.tags.map((tag) => (
                    <li>
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
                  {product.data.description.map((description) => (
                    <>{description.text}</>
                  ))}
                </p>
              </td>
            </tr>
          </table>
          <div>
            <input type="number" min="1" max="10"></input>
            <button>Add to cart!</button>
          </div>
          <table>
            <tr>
              <th colSpan="2">Specs</th>
            </tr>
            {product.data.specs.map((spec) => (
              <tr>
                <td>
                  <b>{spec.spec_name}: </b>
                </td>
                <td>{spec.spec_value}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
