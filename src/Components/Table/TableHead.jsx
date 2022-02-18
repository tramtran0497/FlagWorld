import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function TableHead({ listItems, displaySortList }) {
  const [statusAscend, setStatusAscend] = useState(false);
  const [nameColumn, setNameColumn] = useState("");
  const [show, setShow] = useState(false);

  const handleChangeIcon = (event) => {
    if (!event.target.textContent) return;
    if (event.target.textContent !== nameColumn) {
      setShow(true);
    }
    setNameColumn(event.target.textContent);
    setStatusAscend(!statusAscend);
  };

  useEffect(() => {
    if (listItems) {
      sortColumn(nameColumn, statusAscend);
    } 
  }, [nameColumn, statusAscend]);

  const sortColumn = (nameColumn, statusAscend1) => {
    const clone = [...listItems];
    const nameColumn1 = nameColumn.toLowerCase();
    const sortedList =
      clone &&
      clone.sort((a, b) => {
        if (
          typeof a[nameColumn1] === "number" &&
          typeof b[nameColumn1] === "number"
        ) {
          if (statusAscend1) {
            return a[nameColumn1] - b[nameColumn1];
          } else {
            return b[nameColumn1] - a[nameColumn1];
          }
        } else if (
          typeof a[nameColumn1] === "string" &&
          typeof b[nameColumn1] === "string"
        ) {
          let characterA = a[nameColumn1] && a[nameColumn1].toLowerCase();
          let characterB = b[nameColumn1] && b[nameColumn1].toLowerCase();
          if (!statusAscend1) {
            if (characterA < characterB) return 1;
            if (characterA > characterB) return -1;
            else return 0;
          }
          if (statusAscend1) {
            if (characterA < characterB) return -1;
            if (characterA > characterB) return 1;
            else return 0;
          }
        } else {
          return 0;
        }
      });
    // console.log(
    //   sortedList && sortedList.map((country) => country[nameColumn1])
    // );
    displaySortList(sortedList)
  };
  return (
    <tr className="list-header-table">
      <th>FLAG</th>
      <th onClick={handleChangeIcon}>
        NAME
        <div
          style={{
            display: show && nameColumn === "NAME" ? "block" : "none",
          }}
        >
          {nameColumn === "NAME" && statusAscend ? (
            <ArrowUpwardIcon />
          ) : (
            <ArrowDownwardIcon />
          )}
        </div>
      </th>
      <th onClick={handleChangeIcon}>
        CAPITAL
        <div
          style={{
            display: show && nameColumn === "CAPITAL" ? "block" : "none",
          }}
        >
          {nameColumn === "CAPITAL" && statusAscend ? (
            <ArrowUpwardIcon />
          ) : (
            <ArrowDownwardIcon />
          )}
        </div>
      </th>

      <th onClick={handleChangeIcon}>
        REGION
        <div
          style={{
            display: show && nameColumn === "REGION" ? "block" : "none",
          }}
        >
          {nameColumn === "REGION" && statusAscend ? (
            <ArrowUpwardIcon />
          ) : (
            <ArrowDownwardIcon />
          )}
        </div>
      </th>
      <th onClick={handleChangeIcon}>
        POPULATION
        <div
          style={{
            display: show && nameColumn === "POPULATION" ? "block" : "none",
          }}
        >
          {nameColumn === "POPULATION" && statusAscend ? (
            <ArrowUpwardIcon />
          ) : (
            <ArrowDownwardIcon />
          )}
        </div>
      </th>
      <th>LANGUAGES</th>
      <th>BUY FLAG</th>
      <th>FAVORITE</th>
    </tr>
  );
}

export default TableHead;
