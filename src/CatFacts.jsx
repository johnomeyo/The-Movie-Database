
// import axios from 'axios';
import { useState, useEffect } from 'react';

function CatFacts() {

    const [facts, setFacts] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=027588cf2e891cddfc1d92a5a2f593d3')
            .then(response => response.json())
            .then(data => setFacts(data))
            .catch(error => console.error("An error occured while fetching data:", error))
    }, [])


    return (
        <>
            <div>
                <p>{facts.total_pages}</p>
                {/* <p>{overview}</p> */}

            </div>
        </>
    );
}
export default CatFacts;

        // <MovieCard title={movies.budget} description={movies.overview} imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOwG9snRK2qaXUPEqvrbDUPfI2uJNM0zrPkA&s"/>
