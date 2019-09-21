import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Login, Register, NotFound, Player } from '../containers'
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
                        exact
                        path='/player/:id'
                        component={Player}
                    />
                    <Route
                        component={NotFound}
                    />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
