import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("titanic");

  const url = `https://www.omdbapi.com/?apikey=d3b6cfec&s=${searchQuery}`;

  const fetchMovieData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data.Search);
      }
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovieData(url);
  }, [searchQuery]);

  return (
    <AppContext.Provider
      value={{ movies, isLoading, error, searchQuery, setSearchQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
