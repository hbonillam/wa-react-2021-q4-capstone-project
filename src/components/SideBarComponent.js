import React, { useState } from "react";
import { ProductCategories } from "../mock/en-us/product-categories";

class SidebarComponent extends React.Component {
  productCategoriesData;
  constructor(props) {
    super(props);
    this.state = {
      selectedCategories: new Set(),
    };
    this.productCategoriesData = ProductCategories.results.map(
      (result) => result
    );
  }
  addCategory(id) {
    this.setState(({ selectedCategories }) => ({
      selectedCategories: new Set(selectedCategories).add(id),
    }));
  }
  removeCategory(id) {
    this.setState(({ selectedCategories }) => {
      const newSelectedCategories = new Set(selectedCategories);
      newSelectedCategories.delete(id);

      return {
        selectedCategories: newSelectedCategories,
      };
    });
  }
  onSelectCategory = () => {
    this.props.onSelectCategory(this.state.selectedCategories);
  };
  selectCategory(id) {
    if (new Set(this.state.selectedCategories).has(id)) this.removeCategory(id);
    else this.addCategory(id);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedCategories !== prevState.selectedCategories) {
      this.onSelectCategory();
    }
  }

  render() {
    return (
      <div className="sidebar">
        <h1>SideBar</h1>
        {this.productCategoriesData.map((result) => {
          return this.state.selectedCategories.has(result.id) ? (
            <div
              className="category selectedCategory"
              key={result.id}
              onClick={() => this.selectCategory(result.id)}
            >
              <h2>{result.data.name}</h2>
            </div>
          ) : (
            <div
              className="category"
              key={result.id}
              onClick={() => this.selectCategory(result.id)}
            >
              <h2>{result.data.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SidebarComponent;
