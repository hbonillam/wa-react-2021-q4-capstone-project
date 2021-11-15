import React from "react";
import SliderComponent from "./SliderComponent";
import CarouselComponent from "./CarouselComponent";
import GridComponent from "./GridComponent";
import { useFeaturedBanners } from "../utils/hooks/useFeaturedBanners";
import { useProductCategories } from "../utils/hooks/useProductCategories";
import { useFeaturedProducts } from "../utils/hooks/useFeaturedProducts";

function HomePageComponent() {
  let bannersImg = [];
  let productCategoriesImg = [];
  let featuredProductsImg = [];
  const featuredBanners = useFeaturedBanners();
  const productCategories = useProductCategories();
  const featuredProducts = useFeaturedProducts();
  const setBanners = function () {
    if (!featuredBanners.isLoading) {
      //console.log(featuredBanners);
      bannersImg = featuredBanners.data.results?.map((result) => result.data);
    }
  };
  const setProductCategories = function () {
    if (!productCategories.isLoading) {
      productCategoriesImg = productCategories.data.results?.map(
        (result) => result.data
      );
    }
  };
  const setFeaturedProducts = function () {
    if (!featuredProducts.isLoading) {
      featuredProductsImg = featuredProducts.data.results?.map(
        (result) => result
      );
    }
  };

  setBanners();
  setProductCategories();
  setFeaturedProducts();
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
