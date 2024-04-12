import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=027588cf2e891cddfc1d92a5a2f593d3")
            .then(
                response => {
                    setMovies(response.data)
                }
            )
            .catch(error => {
                console.error("An error occured", error);
            })
    }, []);
    const { results } = movies;
    console.log(results[0].title)
    return (
        <>            <MovieCard title={results[0].title} description={results[0].overview} imageUrl={results[0].backdrop_path} />
        </>
    );
}
export default Movies;