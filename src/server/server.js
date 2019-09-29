import express from 'express'
import webpack from 'webpack'
import helmet from 'helmet'
import passport from 'passport'
import session from 'express-session'
import boom from '@hapi/boom'
import cookieParser from 'cookie-parser'
import axios from 'axios'
import { main } from './routes'
import config from './config'

const { nodeEnv, port } = config

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cookieParser())
app.use(session({ secret: config.sessionSecret }))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(`${__dirname}/public`))

if (nodeEnv === 'development') {
    console.log('Loading development config')
    const webpackConfig = require('../../webpack.config')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const compiler = webpack(webpackConfig)
    const serverConfig = {
        contentBase: `http://localhost:${port}`,
        port,
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        historyApiFallback: true,
        stats: { colors: true },
    }

    app.use(webpackDevMiddleware(compiler, serverConfig))
    app.use(webpackHotMiddleware(compiler))
} else {
    console.log('Loading production config')
    app.use(helmet.permittedCrossDomainPolicies())
    app.disable('x-powered-by')
}

app.get('*', main)

app.post('/auth/sign-in', (req, res, next) => {
    passport.authenticate('basic', (error, data) => {
        try {
            if (error || !data) {
                return next(boom.unauthorized())
            }
            req.login(data, { session: false }, error => {
                if (error) {
                    return next(error)
                }

                const { token, user } = data

                res.cookie('token', token, {
                    httpOnly: !config.dev,
                    secure: !config.dev,
                })

                res.status(200).json(user)
            })
        } catch (error) {
            next(error)
        }
    })(req, res, next)
})

app.post('/auth/sign-up', async (req, res, next) => {
    const { body: user } = req

    try {
        const { data: { data } } = await axios({
            url: `${config.apiUrl}/api/auth/sign-up`,
            method: 'post',
            data: user,
        })

        res.status(201).json({
            name: user.name,
            email: user.email,
            id: data.id,
        })
    } catch (error) {
        next(error)
    }
})

app.get('/movies', async () => {})

app.post('/user-movies', async (req, res, next) => {
    try {
        const { body: userMovie } = req
        const { token } = req.cookies

        const { data, status } = await axios({
            url: `${config.apiUrl}/api/user-movies`,
            headers: { Authorization: `Bearer ${token}` },
            method: 'post',
            data: userMovie,
        })

        if (status !== 201) {
            return next(boom.badImplementation())
        }

        res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})

app.delete('/user-movies/:userMovieId', async (req, res, next) => {
    try {
        const { userMovieId } = req.params
        const { token } = req.cookies

        const { data, status } = await axios({
            url: `${config.apiUrl}/api/user-movies/${userMovieId}`,
            headers: { Authorization: `Bearer ${token}` },
            method: 'delete',
        })

        if (status !== 200) {
            return next(boom.badImplementation())
        }

        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})

app.get(
    '/auth/google-oauth',
    passport.authenticate('google-oauth', {
        scope: ['email', 'profile', 'openid'],
    }),
)

app.get(
    '/auth/google-oauth/callback',
    passport.authenticate('google-oauth', {
        session: false,
    }),
    (req, res, next) => {
        if (!req.user) {
            next(boom.unauthorized())
        }

        const { token, ...user } = req.user

        res.cookie('token', token, {
            httpOnly: !config.dev,
            secure: !config.dev,
        })

        res.status(200).json(user)
    },
)

app.get('/auth/twitter', passport.authenticate('twitter'))

app.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter', { session: false }),
    async (req, res, next) => {
        if (!req.user) {
            return next(boom.unauthorized())
        }

        const { token, ...user } = req.user

        res.cookie('token', token, {
            httpOnly: !config.dev,
            secure: !config.dev,
        })

        res.status(200).json(user)
    },
)

app.get('/auth/facebook', passport.authenticate('facebook'))

app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { session: false }),
    (req, res, next) => {
        if (!req.user) {
            next(boom.unauthorized())
        }

        const { token, ...user } = req.user

        res.cookie('token', token, {
            httpOnly: !config.dev,
            secure: !config.dev,
        })

        res.status(200).json(user)
    },
)

app.listen(port, error => {
    if (error) {
        console.log(error)
    }
    console.log(`Server running on http://localhost:${port}`)
})
