import React from "react";

function SearchResultItem({ product }) {
  return (
    <div className="search-result-item">
      <div>
        <img
          className="search-result-item-img"
          src={product.data?.mainimage.url}
          alt={product.data?.name}
        />
      </div>
      <div>
        <span>
          <b>Nombre: </b>
          {product.data?.name}
        </span>
        <br />
        <span>
          <b>Categoria: </b>
          {product.data?.category.slug}
        </span>
        <br />
        <span>
          <b>Precio: </b>$
          {product.data?.price.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
        </span>
        <hr />
        <button className="green-button">Add to Cart</button>
        <br />
      </div>
    </div>
  );
}

export default SearchResultItem;
