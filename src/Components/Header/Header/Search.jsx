import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../HeaderStyle/search.scss";

function Search({ searchNameCountries }) {
  const [isShow, setIsShow] = useState(false);
  const [inputText, setInputText] = useState("");
  const [suggestListName, setSuggestListName] = useState([]);
  const listCountries = useSelector((state) => state.fetch.listCountries);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputText === "") {
      setIsShow(false);
      searchNameCountries("");
    }
  }, [inputText, searchNameCountries]);

  const suggestNames = (inputText) => {
    if (!inputText) {
      setSuggestListName([]);
    } else {
      const text = inputText.toLowerCase();
      const suggestedList = listCountries.filter((country) =>
        country.name.toLowerCase().includes(text)
      );
      setSuggestListName(suggestedList);
      setIsShow(true);
    }
  };

  const handleClick = (event) => {
    setInputText(event.target.textContent);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
    suggestNames(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.charCode === 13) {
      handleSubmit(event);
      setSuggestListName([]);
    }
  };

  const handleSubmit = (event) => {
    searchNameCountries(inputText);
    setSuggestListName([]);
    setIsShow(false);
    navigate("/");
  };
  return (
    <div className="search">
      <div className="search__input">
        <input
          type="text"
          onChange={handleChange}
          value={inputText}
          onKeyPress={handleEnter}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div
        className="search__suggestion"
        style={{ display: isShow ? "block" : "none" }}
      >
        {suggestListName?.map((country) => (
          <p key={country.name} onClick={handleClick}>
            {country.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Search;
