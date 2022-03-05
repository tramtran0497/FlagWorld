import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { useEffect, useState } from "react";
import "../TableStyle/tableShowsCountries.scss";

function TableShowsCountries({ listItems, loading, error }) {
  const [displayList, setDisplayList] = useState(listItems);

  useEffect(() => {
    setDisplayList(listItems);
  }, [listItems]);

  if (loading) return <h1 className="loading">Loading...</h1>;
  if (error) return <h1 className="error">Something went wrong...</h1>;

  const displaySortList = (list) => {
    setDisplayList(list);
  };
  return (
    <table className="table">
      <TableHead listItems={listItems} displaySortList={displaySortList} />
      <TableBody listItems={displayList} />
    </table>
  );
}

export default TableShowsCountries;
