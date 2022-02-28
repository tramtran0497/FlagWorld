import TableShowsCountries from "../Components/Table/Table/TableShowCountries";
import "./home.scss";

function Home({ displayList, loading, error }) {
  return (
    <div className="home">
      <TableShowsCountries
        listItems={displayList}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Home;
