import React from "react";
import HomePageComponent from "./HomePageComponent";
import ProductListComponent from "./ProductListComponent";
import ProductDetail from "./ProductDetail";
import SearchResultsPage from "./SearchResultsPage";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function PageContent() {
  return (
    <div className="page-content">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <React.Fragment>
              <HomePageComponent></HomePageComponent>
              <div>
                <NavLink to="/products" activeClassName="active-link" exact>
                  View all products
                </NavLink>
              </div>
            </React.Fragment>
          </Route>
          <Route path="/products">
            <ProductListComponent></ProductListComponent>
          </Route>

          <Route exact path="/">
            <React.Fragment>
              <HomePageComponent></HomePageComponent>
              <div>
                <NavLink to="/products" activeClassName="active-link" exact>
                  View all products
                </NavLink>
              </div>
            </React.Fragment>
          </Route>
          <Route path={`/product/:productId`}>
            <ProductDetail />
          </Route>
          <Route path={`/searchResultsPage/:searchTerm`}>
            <SearchResultsPage />
          </Route>
          <Route path="*">
            <div>
              <h1>Not Found</h1>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default PageContent;
