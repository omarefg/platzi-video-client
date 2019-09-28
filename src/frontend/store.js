import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const preloadedState = window.__PRELOADED_STATE__

let enhancer

if (process.env.NODE_ENV === 'production') {
    enhancer = compose(applyMiddleware(thunk))
    enhancer = compose
} else {
    enhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
}

export const store = createStore(reducer, preloadedState, enhancer)
