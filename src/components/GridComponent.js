import React from "react";
import GridCell from "./GridCell";

function CarouselComponent({ featuredProductsImg }) {
  console.log(featuredProductsImg);
  return (
    <div>
      <h2>Grid</h2>

      <div className="grid-component">
        {featuredProductsImg.map((fp) => {
          return <GridCell featuredProduct={fp}></GridCell>;
        })}
      </div>
    </div>
  );
}

export default CarouselComponent;
