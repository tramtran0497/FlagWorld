import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { useEffect, useState } from "react";

function TableShowsCountries({ listItems, loading, error }) {
  const [displayList, setDisplayList] = useState(listItems);

  useEffect(() => {
    setDisplayList(listItems);
  }, [listItems]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong...</h1>;

  const displaySortList = (list) => {
    setDisplayList(list);
  };
  return (
    <table>
      <TableHead listItems={listItems} displaySortList={displaySortList} />
      <TableBody listItems={displayList} />
    </table>
  );
}

export default TableShowsCountries;
