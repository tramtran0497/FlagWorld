import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from "./fetchCountries-types";

export const fetchCountries = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_COUNTRIES_REQUEST,
    });
    const url = "https://restcountries.com/v3.1/all";
    const responseAPI = await fetch(url);
    const responseJSON = await responseAPI.json();
    const listCountries = responseJSON.map((country) => {
      return {
        name: country.name.common,
        capital: country.capital && country.capital[0],
        region: country.region,
        languages: country.languages && Object.values(country.languages),
        flag: country.flags.png,
        population: country.population,
      };
    });
    dispatch({
      type: FETCH_COUNTRIES_SUCCESS,
      data: listCountries,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_COUNTRIES_FAILURE,
      message: error,
    });
  }
};
