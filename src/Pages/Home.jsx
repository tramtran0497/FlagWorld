import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TableShowsCountries from "../Components/Table/Table/TableShowCountries";
import "./home.scss";

function Home({ displayList, loading, error, takeCurrentPath}) {
  const location = useLocation()
  
  useEffect(() => {
    takeCurrentPath(location.pathname)
  }, [takeCurrentPath, location])
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
