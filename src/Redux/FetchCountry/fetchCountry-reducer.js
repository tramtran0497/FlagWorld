import {
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_FAILURE,
  } from "./fetchCountry-types.js";
  
  const INITIAL_STATE = {
    loading: false,
    success: false,
    country: {},
    error: "",
  };
  
  function fetchCountryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_COUNTRY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_COUNTRY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          country: action.data,
        };
      case FETCH_COUNTRY_FAILURE:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.message,
        };
      default:
        return state;
    }
  }
  
  export default fetchCountryReducer;
  