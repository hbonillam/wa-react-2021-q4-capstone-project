import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResultList({ searchResults, searchTerm }) {
  return (
    <div>
      <h2>Search Results for : {searchTerm}</h2>

      <div className="search-result-list">
        {searchResults &&
          searchResults.map((product) => {
            return (
              <SearchResultItem
                product={product}
                key={product.id}
              ></SearchResultItem>
            );
          })}
      </div>
    </div>
  );
}

export default SearchResultList;
