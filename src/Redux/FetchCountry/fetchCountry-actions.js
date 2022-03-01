import {
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_FAILURE,
  } from "./fetchCountry-types.js";
  
  export const fetchCountry = (name) => async (dispatch) => {
    try {
      dispatch({
        type: FETCH_COUNTRY_REQUEST,
      });
      const url = `https://restcountries.com/v3.1/name/${name}`;
      const responseAPI = await fetch(url);
      const responseJSON = await responseAPI.json();
      const country = responseJSON.map((country) => {
        return {
          name: country.name.common,
          capital: country.capital && country.capital[0],
          region: country.region,
          population: country.population,
          languages: country.languages && Object.values(country.languages),
          flag: country.flags.png,
        };
      })[0];
      dispatch({
        type: FETCH_COUNTRY_SUCCESS,
        data: country,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_COUNTRY_FAILURE,
        message: error,
      });
    }
  };
  