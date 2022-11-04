import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";

export default function SearchResult({searchVal}){
    
    const [searchNames, setSearchNames] = useState([]);
    const [movieResults, setMovieResults] = useState([]);
    const uniqueMovies = [];


    useEffect(() => {
        
        setSearchNames((prevSearchNames) => {
            if(searchVal.length > 0) {
                return [...prevSearchNames, searchVal];
            } else {
                return [...prevSearchNames]
            }
        })
               
    }, [searchVal])

    useEffect(() => {

        searchNames.forEach(async item => {
            let res = await fetch(`http://www.omdbapi.com/?t=${item}&apikey=f2a05d22`);
            let data = await res.json();
            if(data.Response === "True") {
                if(movieResults.length >= 7) {

                    setMovieResults((prevMovies) => {
                        return prevMovies.slice(-7)
                    })
                }

                setMovieResults(prevMovies => { 
                    return prevMovies.concat(data)
                }) 
            }
        })  

    }, [searchNames])



    let resultJSX = movieResults.map((item) => {

        return (
            <div key = {nanoid()} className="movie-result">

                <div className="movie-poster">
                    <img className="img-poster" src={item.Poster}></img>
                </div>

                <div className="movie-plot">
                    <p className="movie-title">{item.Title}</p>
                    <p className="movie-genre">{item.Genre}</p>
                </div>

            </div>
        )

    })


    useEffect(() => {
        console.log(movieResults)
    },[movieResults])


    return (
            <>
                {resultJSX}
            </>
    )
}