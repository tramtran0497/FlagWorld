import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NavBar from "../Components/Navbar/Navbar/NavBar";
import TableShowsCountries from "../Components/Table/Table/TableShowCountries";
import { fetchCountries } from "../Redux/FetchCountries/fetchCountries-actions";

function Home() {
  const listCountries = useSelector((state) => state.fetch.listCountries);
  const loading = useSelector((state) => state.fetch.loading);
  const error = useSelector((state) => state.fetch.error);
  const dispatch = useDispatch();

  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  useEffect(() => {
    setDisplayList(listCountries);
  }, [listCountries]);

  const searchNameCountries = (inputText) => {
    if (!inputText) {
      setDisplayList(listCountries);
    } else {
      const text = inputText.toLowerCase();
      const searchedList = listCountries.filter((country) =>
        country.name.toLowerCase().includes(text)
      );
      setDisplayList(searchedList);
    }
  };

  return (
    <div>
      <NavBar searchNameCountries={searchNameCountries} />
      <TableShowsCountries
        listItems={displayList}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Home;