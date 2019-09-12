import {
    SET_FAVORITE,
    DELETE_FAVORITE,
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    REGISTER_REQUEST,
} from '../actions/types'

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
    default: {
        return {
            ...state,
        }
    }
    }
}

export default reducer
