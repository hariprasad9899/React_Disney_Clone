import React, {useState, useEffect} from "react";
import movieDb from './Data';

export default function Entry(genre) {

    const [movies, setMovies] = useState([]);
    let trendingMovies = movieDb.trending.names;

    useEffect(() => {

        async function getMoviePoster(movieName){
            let response = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=f2a05d22`);
            let jsonResponse = await response.json();
            return jsonResponse.Poster;
        }

        let newMovies = trendingMovies.map(item => {
            return getMoviePoster(item)
        })

        console.log(newMovies)

        // fetch(`http://www.omdbapi.com/?t=${trendingMovies[0]}&apikey=f2a05d22`)
        // .then(response => response.json())
        // .then(response => setMovies(response.Poster))
        
    }, [])

    
    return (
        <img src = ""></img>
    )


}