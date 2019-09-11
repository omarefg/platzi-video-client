import { SET_FAVORITE, DELETE_FAVORITE } from './types'

export const setFavorite = payload => ({
    type: SET_FAVORITE,
    payload,
})

export const deleteFavorite = payload => ({
    type: DELETE_FAVORITE,
    payload,
})
