import React, {useState, useEffect} from "react";
import { nanoid } from 'nanoid';
import movieDb from "../APIData/Data";
import MovieCard from "./MovieCard";

export default function Movies({genre}) {

    const [movies, setMovies] = useState([]);
    const [loadState, setLoadState] = useState(true);
    let selectedGenre = movieDb[genre].names;

    useEffect(() => {
        
        selectedGenre.forEach(async item => {
            let res = await fetch(`http://www.omdbapi.com/?t=${item}&apikey=f2a05d22`);
            let data = await res.json();
            setMovies(prevMovies => {
                return prevMovies.concat(data)
            })
            setLoadState(false)
        })        

    }, [])


    let MOVIESJSX = movies.map(item => {    
        return (
            <MovieCard movieInfo = {item} key = {nanoid()}
        />)
    })

    return (

        <div className="movie-container">
            <a>{movieDb[genre].title}</a>
            <div className = {`genre-${genre}`}>
                { (loadState) ? <h1>Loading</h1> : MOVIESJSX }
            </div>
        </div>
        
    )
}