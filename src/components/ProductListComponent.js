import React, { useState, useEffect } from "react";
import SideBarComponent from "./SideBarComponent";
import { FeaturedProducts } from "../mock/en-us/featured-products";
import GridComponent from "./GridComponent";
import GridPagination from "./GridPagination";
import loadingCircular from "../assets/images/loading-circular.gif";
import { useFeaturedProducts } from "../utils/hooks/useFeaturedProducts";

function ProducListComponent() {
  const [categories, setCategories] = useState(new Set());
  const featuredProducts = useFeaturedProducts();
  const [featuredProductsImg, setFeaturedProductsImg] = useState([]);
  const [numberofPages] = useState(5);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  const updateCategories = (updatedCategories) => {
    setCategories(updatedCategories);
  };
  useEffect(() => {
    if (categories && categories.size === 0) {
      setFeaturedProductsImg(FeaturedProducts.results.map((result) => result));
    } else {
      setFeaturedProductsImg(
        FeaturedProducts.results
          .map((result) => result)
          .filter((result) => categories.has(result.data.category.id))
      );
    }
  }, [categories]);
  useEffect(() => {
    if (!featuredProducts.isLoading) {
      setFeaturedProductsImg(
        featuredProducts.data.results?.map((result) => result)
      );
    }
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
            <GridPagination
              numberofPages={numberofPages}
              updateSelectedPage={() => {}}
            ></GridPagination>
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
