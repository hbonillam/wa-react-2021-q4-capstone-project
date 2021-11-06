import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI.js";

export function useProductSearch(searchTerm, page = 0) {
  console.log(searchTerm, typeof page);
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productSearch, setProductSearch] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProductSearch() {
      try {
        setProductSearch({ data: {}, isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bfulltext(document%2C%20%22${searchTerm}%22)%5D%5D${
            page && page > 1 ? `&page=${page}` : ""
          }&lang=en-us&pageSize=20`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProductSearch({ data, isLoading: false });
      } catch (err) {
        setProductSearch({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getProductSearch();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, searchTerm, page]);

  return productSearch;
}
