import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Login, Register, NotFound, Player } from '../containers'
import { Layout } from '../components'

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export const App = connect(mapStateToProps)(({ user }) => {
    const isLogged = user.id

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={isLogged ? Home : Login}
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
                        component={isLogged ? Player : Login}
                    />
                    <Route
                        component={NotFound}
                    />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
})
