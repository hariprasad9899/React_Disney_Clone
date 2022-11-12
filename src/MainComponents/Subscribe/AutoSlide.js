import React, { useState, useEffect } from "react";
import '../../Sass/autoslide.scss';
import Data from '../APIData/Data';
import MakePoster from "./MakePoster";
import { nanoid } from "nanoid";


export default function AutoSlide(){

    const [movieData, setMovieData] = useState([]);

    let movieNames = Data.all.names;

    useEffect(() => {
        
        movieNames.forEach(async item => {
            let res = await fetch(`http://www.omdbapi.com/?t=${item}&apikey=f2a05d22`);
            let data = await res.json();
            if(data.Response === "True") {
                setMovieData(prevMovies => { 
                    return prevMovies.concat(data)
                })
            }
        })        
    }, [])
    

    let posterJSX = movieData.map(item => {
        return (
            <MakePoster moviePoster={item.Poster} key = {nanoid()} />
        )
    })

    

    return (
        <div className="auto-slide">
            <div className="inner-slide">
                {posterJSX}
            </div>
        </div>
    )


}