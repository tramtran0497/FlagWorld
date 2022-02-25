import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function TableHead({ listItems, displaySortList }) {
  const [asc, setAsc] = useState(false);
  const [columnName, setColumnName] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleChangeIcon = (event) => {
    if (!event.target.textContent) return;
    if (event.target.textContent !== columnName) {
      setIsShow(true);
    }
    setColumnName(event.target.textContent);
    setAsc(!asc);
  };

  useEffect(() => {
    if (listItems) {
      sortColumn(columnName, asc);
    }
  },[columnName, asc, listItems]);

  const sortColumn = (columnName, asc) => {
    const cloneList = [...listItems];
    const name = columnName.toLowerCase();
    const sortedList =
      cloneList &&
      cloneList.sort((a, b) => {
        if (typeof a[name] === "number" && typeof b[name] === "number") {
          if (asc) {
            return a[name] - b[name];
          } else {
            return b[name] - a[name];
          }
        } else if (typeof a[name] === "string" && typeof b[name] === "string") {
          let characterA = a[name] && a[name].toLowerCase();
          let characterB = b[name] && b[name].toLowerCase();
          if (!asc) {
            if (characterA < characterB) return 1;
            if (characterA > characterB) return -1;
            else return 0;
          }
          if (asc) {
            if (characterA < characterB) return -1;
            if (characterA > characterB) return 1;
            else return 0;
          }
        } else {
          return 0;
        }
      });

    displaySortList(sortedList);
  };
  return (
    <thead>
      <tr className="table-header">
        <th>FLAG</th>
        <th onClick={handleChangeIcon}>
          NAME
          <div
            style={{
              display: isShow && columnName === "NAME" ? "block" : "none",
            }}
          >
            {columnName === "NAME" && asc ? (
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
              display: isShow && columnName === "CAPITAL" ? "block" : "none",
            }}
          >
            {columnName === "CAPITAL" && asc ? (
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
              display: isShow && columnName === "REGION" ? "block" : "none",
            }}
          >
            {columnName === "REGION" && asc ? (
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
              display: isShow && columnName === "POPULATION" ? "block" : "none",
            }}
          >
            {columnName === "POPULATION" && asc ? (
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
    </thead>
  );
}

export default TableHead;
