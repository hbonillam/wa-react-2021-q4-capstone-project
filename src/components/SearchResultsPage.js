import React from "react";
import { useParams } from "react-router-dom";
import { useProductSearch } from "../utils/hooks/useProductSearch";

function SearchResultsPage() {
  const { searchTerm } = useParams();
  const response = useProductSearch(searchTerm);
  console.log(response);
  //   const [product, setProduct] = useState(null);
  //   useEffect(() => {
  //     if (!response.isLoading && response?.data?.results?.length > 0) {
  //       setProduct(response.data.results[0]);
  //     }
  //   }, [response]);
  return <div>{searchTerm}</div>;
}

export default SearchResultsPage;