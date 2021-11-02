import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function GridPagination(props) {
  const [selectedPage, setSelectedPage] = useState(1);
  useEffect(() => {
    props.updateSelectedPage(selectedPage);
  }, [selectedPage, props]);
  return (
    <div className="pagination">
      <ul className="paginationList">
        {props.numberofPages &&
          Array.from(Array(props.numberofPages).keys()).map((number) => {
            return (
              <li key={number}>
                <button onClick={() => setSelectedPage(number + 1)}>
                  {number + 1}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default GridPagination;
