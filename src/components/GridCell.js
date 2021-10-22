import React from "react";

function CarouselComponent({ featuredProduct }) {
  return (
    <div className="gridcell-component">
      <div>
        <img
          src={featuredProduct.mainimage.url}
          className="gridcell-image"
          alt={featuredProduct.name}
        />
      </div>
      <div className="gridcell-data">
        <span>
          <b>Nombre: </b>
          {featuredProduct.name}
        </span>
        <br />
        <span>
          <b>Categoria: </b>
          {featuredProduct.category.slug}
        </span>
        <br />
        <span>
          <b>Precio: </b>$
          {featuredProduct.price.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
        </span>
        <br />
      </div>
    </div>
  );
}

export default CarouselComponent;
