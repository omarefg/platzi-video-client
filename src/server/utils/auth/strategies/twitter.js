import passport from 'passport'
import axios from 'axios'
import { get } from 'lodash'
import { Strategy as TwitterStrategy } from 'passport-twitter'
import boom from '@hapi/boom'
import config from '../../../config'

passport.use(
    new TwitterStrategy({
        consumerKey: config.twitterConsumerKey,
        consumerSecret: config.twitterConsumerSecret,
        callbackURL: '/auth/twitter/callback',
        includeEmail: true,
    }, async (token, tokenSecret, profile, cb) => {
        const { data, status } = await axios({
            url: `${config.apiUrl}/api/auth/sign-provider`,
            method: 'post',
            data: {
                name: profile.displayName,
                email: get(profile, 'emails.0.value', `${profile.username}@twitter.com`),
                password: profile.id,
                apiKeyToken: config.apiKeyToken,
            },
        })

        if (!data || status !== 200) {
            return cb(boom.unauthorized(), false)
        }

        return cb(null, data)
    }),
)
