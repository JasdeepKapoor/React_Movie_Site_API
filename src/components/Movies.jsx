import { NavLink, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Movies = () => {
  const { movies } = useGlobalContext();
  return (
    <>
      <div className="movies-container">
        {movies.map((movie) => {
          const { Title, Poster, imdbID } = movie;
          return (
            <NavLink
              to={`movie/${imdbID}`}
              style={{ textDecoration: "none" }}
              key={imdbID}
            >
              <div className="movie-container" key={movie.imdbID}>
                <div className="heading-container">
                  <h3>{Title}</h3>
                </div>
                <div className="img-container">
                  <img src={Poster}></img>
                </div>
                <p className="text"> </p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
