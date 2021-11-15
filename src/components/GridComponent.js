import React from "react";
import GridCell from "./GridCell";

function GridComponent({ featuredProductsImg }) {
  //console.log(featuredProductsImg.map((fp) => fp.data.name));
  return (
    <div>
      <h2>Grid</h2>

      <div className="grid-component" data-testid="grid">
        {featuredProductsImg &&
          featuredProductsImg.map((fp, i) => {
            return <GridCell featuredProduct={fp} key={i}></GridCell>;
          })}
      </div>
    </div>
  );
}

export default GridComponent;
