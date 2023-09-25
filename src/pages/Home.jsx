import MovieModal from "../components/MovieModal";
import Movies from "../components/Movies";
import Search from "../components/Search";
import useFetch from "../hooks/useFetch";

const Home = () => {
  return (
    <div>
      <>
        <Search></Search>
        <Movies></Movies>
      </>
    </div>
  );
};

export default Home;
