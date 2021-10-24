import React from "react";
import { Banners } from "../mock/en-us/featured-baners";
import { ProductCategories } from "../mock/en-us/product-categories";
import { FeaturedProducts } from "../mock/en-us/featured-products";
import SliderComponent from "./SliderComponent";
import CarouselComponent from "./CarouselComponent";
import GridComponent from "./GridComponent";

function HomePageComponent() {
  const bannersImg = Banners.results.map((result) => result.data);
  const productCategoriesImg = ProductCategories.results.map(
    (result) => result.data
  );
  const featuredProductsImg = FeaturedProducts.results.map(
    (result) => result.data
  );
  return (
    <div className="home-page">
      <h1>Welcome to my store!</h1>
      <SliderComponent bannersImg={bannersImg}></SliderComponent>
      <CarouselComponent
        productCategoriesImg={productCategoriesImg}
      ></CarouselComponent>
      <GridComponent featuredProductsImg={featuredProductsImg}></GridComponent>
    </div>
  );
}

export default HomePageComponent;
