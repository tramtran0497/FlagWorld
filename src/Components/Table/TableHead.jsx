import React from "react";

function TableHead() {
  const listHeader = ["FLAG", "NAME", "CAPITAL", "REGION", "POPULATION", "LANGUAGES", "BUY FLAG", "FAVORITE"]
  return (
    <tr className="list-header-table">
      {listHeader.map(header => <th key={header}>{header}</th>)}
    </tr>
  );
}

export default TableHead;
