import axios from 'axios'

import {
    SET_FAVORITE,
    DELETE_FAVORITE,
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    REGISTER_REQUEST,
    GET_VIDEO_SOURCE,
    FILTER_VIDEOS,
} from './types'

export const setFavorite = payload => ({
    type: SET_FAVORITE,
    payload,
})

export const deleteFavorite = payload => ({
    type: DELETE_FAVORITE,
    payload,
})

export const loginRequest = payload => ({
    type: LOGIN_REQUEST,
    payload,
})

export const logoutRequest = payload => ({
    type: LOGOUT_REQUEST,
    payload,
})

export const registerRequest = payload => ({
    type: REGISTER_REQUEST,
    payload,
})

export const getVideoSource = payload => ({
    type: GET_VIDEO_SOURCE,
    payload,
})

export const filterVideos = payload => ({
    type: FILTER_VIDEOS,
    payload,
})

export const registerUser = payload => dispatch => {
    axios.post('')
}
