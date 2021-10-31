import React from "react";
import GridCell from "./GridCell";

function GridComponent({ featuredProductsImg }) {
  return (
    <div>
      <h2>Grid</h2>

      <div className="grid-component">
        {featuredProductsImg.map((fp, i) => {
          return <GridCell featuredProduct={fp} key={i}></GridCell>;
        })}
      </div>
    </div>
  );
}

export default GridComponent;
