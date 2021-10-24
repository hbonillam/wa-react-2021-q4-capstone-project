import React, { useState } from "react";

class GridPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberofPages: props.numberofPages,
    };
  }
  render() {
    return (
      <div className="pagination">
        <ul>
          {Array.from(Array(this.state.numberofPages).keys()).map((number) => {
            return (
              <li key={number}>
                <a>{number + 1}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default GridPagination;
