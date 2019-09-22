import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StaticRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { serverRoutes } from '../../frontend/routes'
import { Layout } from '../../frontend/components'
import reducer from '../../frontend/reducers'
import { initialState } from '../../../db/videos.json'
import { render } from '../render'

export const main = (req, res, next) => {
    try {
        const store = createStore(reducer, initialState)
        const html = renderToString(
            <Provider store={store}>
                <StaticRouter
                    location={req.url}
                    context={{}}
                >
                    <Layout>
                        {renderRoutes(serverRoutes)}
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
