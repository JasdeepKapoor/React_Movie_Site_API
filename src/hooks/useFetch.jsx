import React, { useEffect, useState } from "react";

function useFetch(searchBy, movieId) {
  const [data, setData] = useState();

  const fetchApi = async (searchBy, movieId) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=d3b6cfec&${searchBy}=${movieId}`
    );
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchApi(searchBy, movieId);
  }, [searchBy, movieId]);
  return data;
}

export default useFetch;
