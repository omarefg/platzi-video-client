import { useState, useEffect } from 'react'

const selectCategorieTitle = categorie => {
    let title
    switch (categorie) {
    case 'trends': {
        title = 'Tendencias'
        break
    }
    case 'originals': {
        title = 'Originales de Platzi Video'
        break
    }
    default: {
        title = categorie
        break
    }
    }
    return title
}

export const useInitialVideos = API => {
    const [videos, setVideos] = useState(null)
    useEffect(() => {
        const getVideos = () => {
            fetch(API)
                .then(videos => videos.json())
                .then(videos => {
                    const response = {}
                    Object.keys(videos).forEach(categorie => {
                        response[selectCategorieTitle(categorie)] = videos[categorie]
                    })
                    setVideos(response)
                })
        }
        getVideos()
    }, [])
    return videos
}
