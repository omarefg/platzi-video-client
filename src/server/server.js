import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'

dotenv.config()

const { ENV } = process.env
const PORT = process.env.PORT || 3025

const app = express()

if (ENV === 'development') {
    console.log('Loading dev config')
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
}

app.get('*', (req, res) => {
    res.send({ holamundo: true })
})

app.listen(PORT, error => {
    if (error) {
        console.log(error)
    }
    console.log(`Server running on http://localhost:${PORT}`)
})
