import { getManifest } from '../utils'
import config from '../config'

const { nodeEnv } = config
const isProd = nodeEnv === 'production'

const srcs = {
    mainCss: 'assets/app.css',
    mainJs: 'assets/app.js',
    vendorsJs: 'assets/vendor.js',
}

if (isProd) {
    const files = getManifest()
    srcs.mainCss = files['main.css']
    srcs.mainJs = files['main.js']
    srcs.vendorsJs = files['vendors.js']
}

export const render = (html, preloadedState) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Platzi Video</title>
            <link rel="stylesheet" href="${srcs.mainCss}" type="text/css"></link>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="${srcs.mainJs}" type="text/javascript"></script>
            <script src="${srcs.vendorsJs}" type="text/javascript"></script>
        </body>
        </html>
    `
}
