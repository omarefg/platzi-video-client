import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
    Search,
    Categories,
    Carousel,
    CarouselItem,
} from '../components'

const mapStateToProps = state => {
    return {
        videos: {
            'Mi Lista': state.mylist,
            Tendencias: state.trends,
            Originales: state.originals,
        },
    }
}

export const Home = connect(mapStateToProps, null)(({ videos }) => {
    return (
        <Fragment>
            <Search/>
            {Object.keys(videos).map(categorie => {
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
                                            video={video}
                                            id={video.id}
                                            cover={video.cover}
                                            key={video.id}
                                            year={video.year}
                                            title={video.title}
                                            contentRating={video.contentRating}
                                            duration={video.duration}
                                            showPlay={true}
                                            showAdd={categorie !== 'Mi Lista' && !videos['Mi Lista'].find(movie => movie.id === video.id)}
                                            showDelete={categorie === 'Mi Lista'}
                                        />
                                    )
                                })}
                            </Carousel>
                        </Categories>
                    )
                }
                return null
            })}
        </Fragment>
    )
})
