import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import reducer from '../reducers'
import { initialState } from '../../../db/videos.json'

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)))
const history = createBrowserHistory()

const ProviderMock = props => {
    const { children } = props

    return (
        <Provider store={store}>
            <Router history={history}>
                {children}
            </Router>
        </Provider>
    )
}

export default ProviderMock
