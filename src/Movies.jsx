import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    }
    const handleSearch = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=027588cf2e891cddfc1d92a5a2f593d3`)
            .then(
                response => {
                    setMovies(response.data.results)
                    console.log(response.data.results)
                }
            )
            .catch(error => {
                console.error("An error occured", error);
            })

    }
    useEffect(() => {
        handleSearch();
    }, []);


    return (
        <>
            <div className="input-container ">
                <input type="text" placeholder="Enter a search item" onChange={(e) => handleSearchInput(e)} />
                <button onClick={() => handleSearch()}>Search</button>
            </div>
            <div>

                {movies.map((movie) => (
                    <MovieCard title={movie.title} description={movie.overview} imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                ))}

            </div>
        </>
    );
}
export default Movies;