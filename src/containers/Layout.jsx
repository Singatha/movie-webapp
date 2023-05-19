import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Series from "./Series"
import Upcoming from "./Upcoming"
import Popular from "./Popular"
import Carousel from 'react-bootstrap/Carousel'
import { useGetTopRatedMoviesQuery } from "../services/movie"

const Layout = () => {
    const { data, error, isLoading } = useGetTopRatedMoviesQuery()

    if (error){
        return <>Oh no, there was an error</>
    } else if (isLoading){
        return <>Loading...</>
    } else {
        return (
            <div className="home-layout">
                <Navbar />
                <Carousel>
                    {
                        data.results.map((movie) => {
                            return (
                                <Carousel.Item key={movie.id}>
                                    <img
                                        className="d-block w-100"
                                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                        alt="Movie Poster"
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                <div className="home-layout-overlay-text">
                    <h1 className="home-layout__text">Movie title</h1>
                    <p className="home-layout__text home-layout__text--light">Movie category</p>
                    <h3 className="home-layout__text">Description</h3>
                    <p className="home-layout__text home-layout__text--light">Movie rating Movie duration</p>
                </div>

                <h3 className="home-layout__header">Upcoming</h3>
                <Upcoming />

                <h3 className="home-layout__header">Popular</h3>
                <Popular />

                <h3 className="home-layout__header">TV Series</h3>
                <Series />

                <Footer />
            </div>
        )
    }
}
    
export default Layout
