import axios from 'axios'
import config from '../config'

export const setInitialState = async req => {
    try {
        const { token, email, name, id } = req.cookies
        let user = {}
        let trends = []
        let originals = []
        let mylist = []

        if (token) {
            const { data: { data: movieList } } = await axios({
                url: `${config.apiUrl}/api/movies`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })

            const { data: { data: userMovies } } = await axios({
                url: `${config.apiUrl}/api/user-movies?userId=${id}`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })
            trends = movieList.filter(movie => movie.id)
            originals = movieList.filter(movie => movie.id)
            mylist = userMovies
        }

        if (email) {
            user = { email, name, id }
        }

        return {
            user,
            playing: {},
            mylist,
            trends,
            originals,
        }
    } catch (error) {
        console.log(error)
    }
}
