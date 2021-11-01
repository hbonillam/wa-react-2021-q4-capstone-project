import React, { useState, useEffect } from "react";
import SideBarComponent from "./SideBarComponent";
import { FeaturedProducts } from "../mock/en-us/featured-products";
import GridComponent from "./GridComponent";
import GridPagination from "./GridPagination";
import loadingCircular from "../assets/images/loading-circular.gif";
import { useFeaturedProducts } from "../utils/hooks/useFeaturedProducts";

function ProducListComponent() {
  let loadingTimeout = null;
  const [categories, setCategories] = useState(new Set());
  const featuredProducts = useFeaturedProducts();
  const [featuredProductsImg, setFeaturedProductsImg] = useState([]);
  const [numberofPages, setNumberofPages] = useState(5);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadingTimeout = setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);
  const setFeaturedProducts = function () {
    if (!featuredProducts.isLoading) {
      setFeaturedProductsImg(
        featuredProducts.data.results?.map((result) => result)
      );
    }
  };
  const updateCategories = (updatedCategories) => {
    setCategories(updatedCategories);
  };
  useEffect(() => {
    if (categories && categories.size === 0) {
      setFeaturedProductsImg(
        FeaturedProducts.results.map((result) => result.data)
      );
    } else {
      setFeaturedProductsImg(
        FeaturedProducts.results
          .map((result) => result.data)
          .filter((data) => categories.has(data.category.id))
      );
    }
  }, [categories]);
  useEffect(() => {
    setFeaturedProducts();
  }, [featuredProducts]);
  return (
    <div className="product-list">
      <SideBarComponent
        onSelectCategory={(updatedCategories) => {
          updateCategories(updatedCategories);
        }}
      ></SideBarComponent>
      <div className="product-list-container">
        <div>
          <h1>This is the Product List</h1>
        </div>
        {loaded ? (
          <React.Fragment>
            <GridComponent
              featuredProductsImg={featuredProductsImg}
            ></GridComponent>
            <GridPagination numberofPages={numberofPages}></GridPagination>
          </React.Fragment>
        ) : (
          <div>
            <h2>Loading ...</h2>
            <img src={loadingCircular} alt="loading"></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProducListComponent;
