import { useGlobalContext } from "../context/context";

const Search = () => {
  const { searchQuery, setSearchQuery } = useGlobalContext();

  return (
    <>
      <section className="search-section">
        <h2>Search Your Favorite Movies</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Search your movie title here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default Search;
