import React from "react";
import TableRows from "./TableRows";

function TableBody({ listItems }) {
  return (
    <tbody>
      {listItems &&
        listItems.map((item) => <TableRows key={item.name} item={item} />)}
    </tbody>
  );
}

export default TableBody;
