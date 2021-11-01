import React from "react";

function GridPagination() {
  const numberofPages = 5;
  return (
    <div className="pagination">
      <ul className="paginationList">
        {Array.from(Array(numberofPages).keys()).map((number) => {
          return (
            <li key={number}>
              <button>{number + 1}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default GridPagination;
