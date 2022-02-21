import {LIKE, UNLIKE} from './favorite-types'

export const like = (item) => {
    return{
        type: LIKE,
        payload: {
            name: item.name,
        }
    }
}

export const unLike = (item) => {
    return{
        type: UNLIKE,
        payload: {
            name: item.name,
        }
    }
}