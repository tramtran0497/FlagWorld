import {FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE} from "./fetchCountries-types"

const INITIAL_STATE = {
    loading: false,
    success: false,
    listCountries: [],
    error: "",
}

function fetchReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_COUNTRIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                listCountries: action.data,
            }
        case FETCH_COUNTRIES_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.message,
            }
        default:
            return state
    }
}

export default fetchReducer