import React from "react";
import HomePageComponent from "./HomePageComponent";
import ProductListComponent from "./ProductListComponent";
import ProductDetail from "./ProductDetail";
import SearchResultsPage from "./SearchResultsPage";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function PageContent() {
  return (
    <BrowserRouter>
      <PageHeader></PageHeader>
      <div className="page-content">
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
      </div>
      <PageFooter></PageFooter>
    </BrowserRouter>
  );
}

export default PageContent;
