import { createStore, compose } from 'redux'
import reducer from './reducers'

const preloadedState = window.__PRELOADED_STATE__

let enhancer

if (process.env.NODE_ENV === 'production') {
    enhancer = compose
} else {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
}

export const store = createStore(reducer, preloadedState, enhancer())
