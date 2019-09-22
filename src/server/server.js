import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
import helmet from 'helmet'
import { main } from './routes'

dotenv.config()

const { NODE_ENV } = process.env
const PORT = process.env.PORT || 3025

const app = express()

app.use(express.static(`${__dirname}/public`))

if (NODE_ENV === 'development') {
    console.log('Loading development config')
    const webpackConfig = require('../../webpack.config')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const compiler = webpack(webpackConfig)
    const serverConfig = {
        contentBase: `http://localhost:${PORT}`,
        port: PORT,
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        historyApiFallback: true,
        stats: { colors: true },
    }

    app.use(webpackDevMiddleware(compiler, serverConfig))
    app.use(webpackHotMiddleware(compiler))
} else {
    console.log('Loading production config')
    app.use(helmet())
    app.use(helmet.permittedCrossDomainPolicies())
    app.disable('x-powered-by')
}

app.get('*', main)

app.listen(PORT, error => {
    if (error) {
        console.log(error)
    }
    console.log(`Server running on http://localhost:${PORT}`)
})
