import {LIKE, UNLIKE} from './favorite-types'

const INITIAL_STATE = {
    listFavorite: [],
    qty: 0
}

const favoriteReducer = (state = INITIAL_STATE, action) => {
    const inFavorite = state.listFavorite.find(item => item.name === action.payload.name)
    switch(action.type){
        case LIKE:
            if(!inFavorite){
                return{
                    ...state,
                    listFavorite: [...state.listFavorite, {
                        name: action.payload.name
                    }],
                    qty: state.qty + 1,
                }
            }
            return state
        case UNLIKE:
            if(inFavorite){
                const indexOfFavorite = state.listFavorite.indexOf(inFavorite)
                const deletedFavorite = state.listFavorite.splice(indexOfFavorite, 1);
                return{
                    ...state,
                    listFavorite: [...state.listFavorite],
                    qty: state.qty - 1
                }
            }
            return state
        default:
            return state
    }
}

export default favoriteReducer