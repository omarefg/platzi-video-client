import { createStore } from 'redux'
import { initialState as initialStateVideos } from '../db/videos.json'
import reducer from './reducers'

const initialState = { ...initialStateVideos }

export const store = createStore(reducer, initialState)
