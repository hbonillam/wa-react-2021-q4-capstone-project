import React, { useState } from "react";
import SideBarComponent from "./SideBarComponent";
import { FeaturedProducts } from "../mock/en-us/featured-products";
import GridComponent from "./GridComponent";
import GridPagination from "./GridPagination";
import loadingCircular from "../assets/images/loading-circular.gif";

class ProducListComponent extends React.Component {
  loadingTimeout;
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      featuredProductsImg: FeaturedProducts.results.map(
        (result) => result.data
      ),
      numberofPages: 5,
      loaded: false,
    };
  }
  componentDidMount() {
    this.loadingTimeout = setTimeout(() => {
      this.setState({ loaded: true });
    }, 2000);
  }
  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  setCategories = (categories) => {
    this.setState({ categories: categories });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.categories !== prevState.categories) {
      if (this.state.categories.size === 0) {
        this.setState({
          featuredProductsImg: FeaturedProducts.results.map(
            (result) => result.data
          ),
        });
      } else {
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
          {this.state.loaded ? (
            <React.Fragment>
              <GridComponent
                featuredProductsImg={this.state.featuredProductsImg}
              ></GridComponent>
              <GridPagination
                numberofPages={this.state.numberofPages}
              ></GridPagination>
            </React.Fragment>
          ) : (
            <div>
              <h2>Loading ...</h2>
              <img src={loadingCircular}></img>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProducListComponent;
