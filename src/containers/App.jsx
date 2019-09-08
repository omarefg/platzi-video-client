import React from 'react'
import {
    Header,
    Search,
    Categories,
    Carousel,
    CarouselItem,
} from '../components'
import '../assets/styles/containers/App.scss'

export const App = () => {
    return (
        <div>
            <Header/>
            <Search/>
            <Categories>
                <Carousel>
                    <CarouselItem
                        image='https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt='People'
                    />
                    <CarouselItem
                        image='https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt='Stranger Things'
                    />
                    <CarouselItem
                        image='https://images.pexels.com/photos/2346001/pexels-photo-2346001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt='Chicago'
                    />
                    <CarouselItem
                        image='https://images.pexels.com/photos/1463924/pexels-photo-1463924.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt='Mermaid'
                    />
                    <CarouselItem
                        image='https://images.pexels.com/photos/1853354/pexels-photo-1853354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt='Mountain'
                    />
                    <CarouselItem
                        image='https://images.pexels.com/photos/2591761/pexels-photo-2591761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt='Poster'
                    />
                    <CarouselItem
                        image='https://images.pexels.com/photos/2559745/pexels-photo-2559745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt='Poster'
                    />
                    <CarouselItem
                        image='https://images.pexels.com/photos/937786/pexels-photo-937786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt='Poster'
                    />
                    <CarouselItem
                        image='https://images.pexels.com/photos/276080/pexels-photo-276080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt='Poster'
                    />
                </Carousel>
            </Categories>
        </div>
    )
}

