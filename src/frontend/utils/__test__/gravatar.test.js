import { gravatar } from '../gravatar'

describe('Gravatar function', () => {
    it('Should return gravatar default url', () => {
        const email = 'elimeil@elimeil.com'
        const gravatarDefaultImage = 'https://gravatar.com/avatar/3932228fe9cb77826202c63b92fad710'
        expect(gravatar(email)).toEqual(gravatarDefaultImage)
    })
})
