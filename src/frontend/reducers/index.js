import {
    SET_FAVORITE,
    DELETE_FAVORITE,
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    REGISTER_REQUEST,
    GET_VIDEO_SOURCE,
    FILTER_VIDEOS,
} from '../actions/types'
import { initialState as initialStateVideos } from '../../../db/videos.json'

const reducer = (state, action) => {
    switch (action.type) {
    case SET_FAVORITE: {
        return {
            ...state,
            mylist: [...state.mylist, action.payload],
        }
    }
    case DELETE_FAVORITE: {
        return {
            ...state,
            mylist: state.mylist.filter(items => items.id !== action.payload),
        }
    }
    case LOGIN_REQUEST: {
        return {
            ...state,
            user: action.payload,
        }
    }
    case LOGOUT_REQUEST: {
        return {
            ...state,
            user: action.payload,
        }
    }
    case REGISTER_REQUEST: {
        return {
            ...state,
            user: action.payload,
        }
    }
    case GET_VIDEO_SOURCE: {
        const playing = [...state.originals, ...state.trends]
            .find(video => video.id.toString() === action.payload) || {}

        return {
            ...state,
            playing,
        }
    }
    case FILTER_VIDEOS: {
        let { trends } = initialStateVideos
        let { originals } = initialStateVideos
        if (action.payload) {
            trends = trends.filter(video => video.title.toUpperCase().includes(action.payload.toUpperCase()))
            originals = originals.filter(video => video.title.toUpperCase().includes(action.payload.toUpperCase()))
        }

        return {
            ...state,
            trends,
            originals,
        }
    }
    default: {
        return {
            ...state,
        }
    }
    }
}

export default reducer
