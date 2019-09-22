import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { App } from './routes'
import { store } from './store'

const history = createBrowserHistory()

if (typeof window !== 'undefined') {
    hydrate(
        <Provider store={store}>
            <Router history={history}>
                <App/>
            </Router>
        </Provider>,
        document.getElementById('root'),
    )
}

