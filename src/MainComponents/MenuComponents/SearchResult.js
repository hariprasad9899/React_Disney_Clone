import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import Watch from "../Content/Watch";

export default function SearchResult({searchVal,setSearchInput}){
    
    const [searchNames, setSearchNames] = useState([]);
    const [movieResults, setMovieResults] = useState([]);
    const uniqueMovies = [];

    const navigate = useNavigate();
    const location1 = useLocation();

    const navigateToWatch = (imdb) => {
        navigate(`/watch/${imdb}`);
        setSearchInput(prevState => {
            return {...prevState,value:"", active:false}
        })
    }


    useEffect(() => {

        if(searchVal.length === 0) {

            setSearchNames(() => {
                return [];
            })

            setMovieResults(() => {
                return [];
            })


        } else {

            setSearchNames((prevSearchNames) => {
                if(searchVal.length > 0) {
                    return [...prevSearchNames, searchVal];
                } else {
                    return [...prevSearchNames]
                }
            })

        }
        
        

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

                    let sRes = prevMovies.every((item) => {
                        if(item.imdbID !== data.imdbID) {
                            return true;
                        } else {
                            return false;
                        }
                    })

                    return (sRes) ? [data,...prevMovies] : prevMovies;
                }) 
            }
        })  

    }, [searchNames])


    let resultJSX = movieResults.map((item) => {    

        return (

            <div key = {nanoid()} className="movie-result" onClick={() => navigateToWatch(item.imdbID)}>

                <div className="movie-poster">
                    <img className="img-poster" src={item.Poster} alt = " :) Img not found"></img>
                </div>

                <div className="movie-plot">
                    <p className="movie-title">{item.Title}</p>
                    <p className="movie-genre">{item.Genre}</p>
                </div>

            </div>
        )

    })

    return (
            <>
                {resultJSX}
            </>
    )
}