import React, { useState } from "react";
import SearchResultList from "./SearchResultList";
import GridPagination from "./GridPagination";
import { useParams } from "react-router-dom";
import { useProductSearch } from "../utils/hooks/useProductSearch";
import { useEffect } from "react/cjs/react.development";

function SearchResultsPage() {
  const { searchTerm } = useParams();
  const [results, setResults] = useState(0);
  const [numberofPages, setNumerofPages] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);
  const response = useProductSearch(searchTerm, selectedPage);
  useEffect(() => {
    if (!response.isLoading) {
      setResults(response.data.results);
      setNumerofPages(parseInt(response.data.total_pages));
    }
  }, [response]);
  const updateSelectedPage = (updatedSelectedPage) => {
    setSelectedPage(updatedSelectedPage);
    window.scrollTo(0, 0);
  };
  //   const [product, setProduct] = useState(null);
  //   useEffect(() => {
  //     if (!response.isLoading && response?.data?.results?.length > 0) {
  //       setProduct(response.data.results[0]);
  //     }
  //   }, [response]);
  return (
    <div>
      <SearchResultList
        searchResults={results}
        searchTerm={searchTerm}
      ></SearchResultList>
      <GridPagination
        numberofPages={numberofPages}
        updateSelectedPage={(updatedSelectedPage) => {
          updateSelectedPage(updatedSelectedPage);
        }}
      ></GridPagination>
      {results && results?.length === 0 && (
        <h2>Sorry. No products match your search.</h2>
      )}
    </div>
  );
}

export default SearchResultsPage;
