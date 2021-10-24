import React, { useState } from "react";
import HomePageComponent from "./HomePageComponent";
import ProductListComponent from "./ProductListComponent";

class PageContent extends React.Component {
  navigationIndex;
  constructor(props) {
    super(props);
    this.state = {
      navigationIndex: props.prop_navigationIndex,
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.prop_navigationIndex !== prevProps.prop_navigationIndex) {
      this.setState({ navigationIndex: this.props.prop_navigationIndex });
    }
  }
  render() {
    return (
      <div className="page-content">
        {this.state.navigationIndex === 0 ? (
          <React.Fragment>
            <HomePageComponent></HomePageComponent>
            <div>
              <button
                className="form-input"
                onClick={this.props.prop_goToProductList}
              >
                View all products
              </button>
            </div>
          </React.Fragment>
        ) : null}
        {this.state.navigationIndex === 1 ? (
          <ProductListComponent></ProductListComponent>
        ) : null}
      </div>
    );
  }
}

export default PageContent;
