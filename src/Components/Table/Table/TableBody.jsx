import React from "react";
import TableRow from "./TableRow";
import "../TableStyle/tableBody.scss";


function TableBody({ listItems }) {
  
  return (
    <tbody className="tableBody">
      {listItems &&
        listItems.map((item) => <TableRow key={item.name} item={item} />)}
    </tbody>
  );
}

export default TableBody;
