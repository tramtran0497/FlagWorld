import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function TableHeader() {
  const listHeaderNames = ["Name", "Capital", "Region", "Languages", "Flag"]
  console.log("Headers", listHeaderNames)
  return (
    <TableHead>
      <TableRow>{listHeaderNames.map(headerItem => {
        return(
          <TableCell align="center" key={headerItem}>{headerItem}</TableCell>
        )
      })}</TableRow>
    </TableHead>
  );
}

export default TableHeader;
