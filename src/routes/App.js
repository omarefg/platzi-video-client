import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Login, Register, NotFound } from '../containers'
import { Layout } from '../components'

export const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={Home}
                    />
                    <Route
                        exact
                        path='/login'
                        component={Login}
                    />
                    <Route
                        exact
                        path='/register'
                        component={Register}
                    />
                    <Route
                        component={NotFound}
                    />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
