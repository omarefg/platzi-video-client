import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StaticRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { serverRoutes } from '../../frontend/routes'
import { Layout } from '../../frontend/components'
import reducer from '../../frontend/reducers'
import { render } from '../render'
import { setInitialState } from '../utils/initialState'

export const main = async (req, res, next) => {
    try {
        const initialState = await setInitialState(req)
        const isLogged = initialState.user.id
        const store = createStore(reducer, initialState)
        const html = renderToString(
            <Provider store={store}>
                <StaticRouter
                    location={req.url}
                    context={{}}
                >
                    <Layout>
                        {renderRoutes(serverRoutes(isLogged))}
                    </Layout>
                </StaticRouter>
            </Provider>,
        )
        const preloadedState = store.getState()
        res.send(render(html, preloadedState))
    } catch (error) {
        next(error)
    }
}
