import React from 'react'
import {
    Header,
    Search,
    Categories,
    Carousel,
    CarouselItem,
    Footer,
} from '../components'
import { useInitialVideos } from '../hooks'

import '../assets/styles/containers/App.scss'

const API = 'http://localhost:3000/initalState'

export const App = () => {
    const videos = useInitialVideos(API)

    return (
        <div>
            <Header/>
            <Search/>
            {videos && Object.keys(videos).map(categorie => {
                if (videos[categorie].length) {
                    return (
                        <Categories
                            title={categorie}
                            key={categorie}
                        >
                            <Carousel>
                                {videos[categorie].map(video => {
                                    return (
                                        <CarouselItem
                                            image={video.cover}
                                            alt={video.title}
                                            key={video.id}
                                            year={video.year}
                                            title={video.title}
                                            content={video.contentRating}
                                            duration={video.duration}
                                        />
                                    )
                                })}
                            </Carousel>
                        </Categories>
                    )
                }
                return null
            })}
            <Footer/>
        </div>
    )
}

