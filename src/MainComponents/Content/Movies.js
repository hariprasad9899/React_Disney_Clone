import React, {useState, useEffect, useRef} from "react";
import { nanoid } from 'nanoid';
import movieDb from "../APIData/Data";
import MovieCard from "./MovieCard";
import '../../Sass/movie.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import SliderSettings from "../Helpers/SliderSettings";
import LoaderContent from "./LoaderContent";


export default function Movies({genre}) {

    const [movies, setMovies] = useState([]);
    const [loadState, setLoadState] = useState(true);
    let selectedGenre = movieDb[genre].names;


    useEffect(() => {
        
        selectedGenre.forEach(async item => {
            let res = await fetch(`http://www.omdbapi.com/?t=${item}&apikey=f2a05d22`);
            let data = await res.json();
            // console.log(data)
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

            <a className="genTitle">{movieDb[genre].title}</a>

                <div className = {`movieList genre-${genre}`} > 

                    {(loadState) ? <LoaderContent /> 
                    : 
                    <Slider {...SliderSettings}>
                        {MOVIESJSX }
                    </Slider>
                    }


                    {/* <Slider {...SliderSettings}>
                        { (loadState) ? <h1>Loading</h1> : MOVIESJSX }
                    </Slider> */}

                    {/* <Slider {...SliderSettings}>
                        { (loadState) ? <h1>Loading</h1> : MOVIESJSX }
                    </Slider> */}
                </div>

        </div>
    )
}