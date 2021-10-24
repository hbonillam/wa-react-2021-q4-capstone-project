import React, { useState } from "react";
import SideBarComponent from "./SideBarComponent";
import { FeaturedProducts } from "../mock/en-us/featured-products";
import GridComponent from "./GridComponent";

class ProducListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      featuredProductsImg: FeaturedProducts.results.map(
        (result) => result.data
      ),
      numberofPages: 5,
    };
  }

  setCategories = (categories) => {
    this.setState({ categories: categories });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.categories !== prevState.categories) {
      if (this.state.categories.size === 0) {
        console.log("no filter");
        this.setState({
          featuredProductsImg: FeaturedProducts.results.map(
            (result) => result.data
          ),
        });
      } else {
        console.log("filter");
        this.setState({
          featuredProductsImg: FeaturedProducts.results
            .map((result) => result.data)
            .filter((data) => this.state.categories.has(data.category.id)),
        });
      }
    }
  }
  render() {
    return (
      <div className="product-list">
        <SideBarComponent
          onSelectCategory={this.setCategories}
        ></SideBarComponent>
        <div className="product-list-container">
          <div>
            <h1>This is the Product List</h1>
          </div>
          <GridComponent
            featuredProductsImg={this.state.featuredProductsImg}
          ></GridComponent>
          <div className="pagination">
            <ul>
              {Array.from(Array(this.state.numberofPages).keys()).map(
                (number) => {
                  return (
                    <li key={number}>
                      <a>{number + 1}</a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProducListComponent;
