import React, {useState, useEffect} from "react";
import movieDb from './Data';

export default function Entry(genre) {

    const [movies, setMovies] = useState([{}]);
    useEffect(() => {

        let trendingMovies = movieDb.trending.names;

        setMovies(prevMovies => {
            
            

        })

        fetch(`http://www.omdbapi.com/?t=${trendingMovies[2]}&apikey=f2a05d22`)
        .then(response => response.json())
        .then(response => setMovies(response.Poster))


    }, [])

    
    return (
        <img src = {movies}></img>
    )


}