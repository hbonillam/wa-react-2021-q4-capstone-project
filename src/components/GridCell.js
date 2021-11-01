import React from "react";

function CarouselComponent({ featuredProduct }) {
  return (
    <div className="gridcell-component">
      <div>
        <img
          src={featuredProduct.data.mainimage.url}
          className="gridcell-image"
          alt={featuredProduct.data.name}
        />
      </div>
      <div className="gridcell-data">
        <span>
          <b>Nombre: </b>
          {featuredProduct.data.name}
        </span>
        <br />
        <span>
          <b>Categoria: </b>
          {featuredProduct.data.category.slug}
        </span>
        <br />
        <span>
          <b>Precio: </b>$
          {featuredProduct.data.price.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
        </span>
        <hr />
        <button>Add to Cart</button>
        <a href={`product/${featuredProduct.id}`}>See detail</a>
        <br />
      </div>
    </div>
  );
}

export default CarouselComponent;
