// import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const MovieModal = () => {
  const { id } = useParams();
  // const { movies } = useGlobalContext();

  const data = useFetch("i", id);

  return (
    <>
      <section className="main-container">
        {data ? (
          <div className="model-container">
            <div className="left-container">
              <img src={data.Poster}></img>
            </div>
            <div className="right-container">
              <h2>{data.Title}</h2>
              <p>Release Date: {data.Released}</p>
              <p>Genre: {data.Genre}</p>
              <p>Rating: {data.imdbRating}</p>
              <p>Country: {data.Country}</p>
              <div>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  {" "}
                  Go Back
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading-container">Loading...</div>
        )}
      </section>
    </>
  );
};

export default MovieModal;
