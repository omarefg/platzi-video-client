import { createStore } from 'redux'
import { initialState as initialStateVideos } from '../../db/videos.json'
import reducer from './reducers'

const initialState = { ...initialStateVideos }
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(reducer, initialState, enhancer)
