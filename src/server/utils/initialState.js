import axios from 'axios'
import config from '../config'

export const setInitialState = async req => {
    const { token, email, name, id } = req.cookies
    let user = {}
    let trends = []
    let originals = []
    let mylist = []

    try {
        if (token) {
            const { data: { data: movieList } } = await axios({
                url: `${config.apiUrl}/api/movies`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })

            let { data: { data: userMovies } } = await axios({
                url: `${config.apiUrl}/api/user-movies?userId=${id}`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })

            userMovies = userMovies.map(movie => {
                const movieData = movieList.find(mlist => mlist._id === movie.movieId)
                if (movieData) {
                    return {
                        ...movieData,
                        userMovieId: movie._id,
                    }
                }
                return null
            })
            userMovies = userMovies.filter(movie => movie)

            trends = movieList.filter(movie => movie.id)
            originals = movieList.filter(movie => movie.id)
            mylist = userMovies
        }

        if (email) {
            user = { email, name, id }
        }
    } catch (error) {
        console.log(error)
    }

    return {
        user,
        playing: {},
        mylist,
        trends,
        originals,
    }
}
