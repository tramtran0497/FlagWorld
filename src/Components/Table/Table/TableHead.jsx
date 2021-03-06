import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../TableStyle/tableHead.scss";

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
  }, [columnName, asc, listItems]);

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
    <thead className="tableHead">
      <tr className="tableHead__list">
        <th className="tableHead__list__flag">FLAG</th>
        <th onClick={handleChangeIcon} className="tableHead__list__name">
          NAME
          <div
            style={{
              display: isShow && columnName === "NAME" ? "block" : "none",
            }}
          >
            {columnName === "NAME" && asc ? (
              <ArrowUpwardIcon className="arrowUpIcon" />
            ) : (
              <ArrowDownwardIcon className="arrowDownIcon" />
            )}
          </div>
        </th>
        <th onClick={handleChangeIcon} className="tableHead__list__capital">
          CAPITAL
          <div
            style={{
              display: isShow && columnName === "CAPITAL" ? "block" : "none",
            }}
          >
            {columnName === "CAPITAL" && asc ? (
              <ArrowUpwardIcon className="arrowUpIcon" />
            ) : (
              <ArrowDownwardIcon className="arrowDownIcon" />
            )}
          </div>
        </th>

        <th onClick={handleChangeIcon} className="tableHead__list__region">
          REGION
          <div
            style={{
              display: isShow && columnName === "REGION" ? "block" : "none",
            }}
          >
            {columnName === "REGION" && asc ? (
              <ArrowUpwardIcon className="arrowUpIcon" />
            ) : (
              <ArrowDownwardIcon className="arrowDownIcon" />
            )}
          </div>
        </th>
        <th onClick={handleChangeIcon} className="tableHead__list__population">
          POPULATION
          <div
            style={{
              display: isShow && columnName === "POPULATION" ? "block" : "none",
            }}
          >
            {columnName === "POPULATION" && asc ? (
              <ArrowUpwardIcon className="arrowUpIcon" />
            ) : (
              <ArrowDownwardIcon className="arrowDownIcon" />
            )}
          </div>
        </th>
        <th className="tableHead__list__languages">LANGUAGES</th>
        <th className="tableHead__list__buyFlag">BUY FLAG</th>
        <th className="tableHead__list__favorite">FAVORITE</th>
      </tr>
    </thead>
  );
}

export default TableHead;
