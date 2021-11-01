import React, { useState, useEffect } from "react";
import { ProductCategories } from "../mock/en-us/product-categories";
import { useProductCategories } from "../utils/hooks/useProductCategories";

function SidebarComponent(props) {
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [productCategoriesData, setProductCategoriesData] = useState([]);
  const productCategories = useProductCategories();
  const setProductCategories = function () {
    if (!productCategories.isLoading) {
      setProductCategoriesData(
        productCategories.data.results?.map((result) => result)
      );
    }
  };
  useEffect(() => {
    setProductCategoriesData(ProductCategories.results.map((result) => result));
  }, []);
  const addCategory = function (id) {
    setSelectedCategories(new Set(selectedCategories).add(id));
  };
  const removeCategory = function (id) {
    const newSelectedCategories = new Set(selectedCategories);
    newSelectedCategories.delete(id);
    setSelectedCategories(newSelectedCategories);
  };
  const onSelectCategory = () => {
    props.onSelectCategory(selectedCategories);
  };
  const selectCategory = function (id) {
    if (new Set(selectedCategories).has(id)) removeCategory(id);
    else addCategory(id);
  };
  useEffect(() => {
    onSelectCategory();
  }, [selectedCategories]);
  useEffect(() => {
    setProductCategories();
  }, [productCategories]);

  return (
    <div className="sidebar">
      <h1>SideBar</h1>
      {productCategoriesData?.length > 0 &&
        productCategoriesData.map((result) => {
          return selectedCategories.has(result.id) ? (
            <div
              className="category selectedCategory"
              key={result.id}
              onClick={() => selectCategory(result.id)}
            >
              <h2>{result.data.name}</h2>
            </div>
          ) : (
            <div
              className="category"
              key={result.id}
              onClick={() => selectCategory(result.id)}
            >
              <h2>{result.data.name}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default SidebarComponent;
