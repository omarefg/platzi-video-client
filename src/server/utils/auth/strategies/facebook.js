import passport from 'passport'
import axios from 'axios'
import boom from '@hapi/boom'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import config from '../../../config'

passport.use(
    new FacebookStrategy(
        {
            clientID: config.facebookClientId,
            clientSecret: config.facebookClientSecret,
            callbackURL: '/auth/facebook/callback',
            enableProof: true,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const { data, status } = await axios({
                    url: `${config.apiUrl}/api/auth/sign-provider`,
                    method: 'post',
                    data: {
                        name: profile.displayName,
                        email: profile.email || `${profile.id}@facebook.com`,
                        password: profile.id,
                        apiKeyToken: config.apiKeyToken,
                    },
                })
                if (!data || status !== 200) {
                    return done(boom.unauthorized(), false)
                }

                return done(null, data)
            } catch (error) {
                return done(error)
            }
        },
    ),
)
