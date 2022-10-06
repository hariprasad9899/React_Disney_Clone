import React, {useState, useEffect, useRef} from "react";
import { nanoid } from 'nanoid';
import movieDb from "../APIData/Data";
import MovieCard from "./MovieCard";
import '../../Sass/movie.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import {ScrollMenu} from 'react-horizontal-scrolling-menu';

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


    const [scrollBtnView, setScrollBtnView] = useState(false);

    function showScrollBtns(){
        setScrollBtnView(true)
    }

    function hideScrollBtns(){
        setScrollBtnView(false)
    }

    const ListContainer = useRef(null);

    function scrollLeft(){
        if(ListContainer.current) {
            ListContainer.current.scrollLeft -= 1500;
        }
    }

    function scrollRight(){
        if(ListContainer.current){
            ListContainer.current.scrollLeft += 1500;
        }
    }

    let SCROLLBTNSTYLE = {
        opacity: (scrollBtnView) ? "1" : "0",
    }

    return (

        <div className="movie-container" ref = {ListContainer}>
            <a>{movieDb[genre].title}</a>
            
            <div className="scrollWrapper" onMouseOver={showScrollBtns}  onMouseLeave = {hideScrollBtns} >

                <div className="scrollLeft scElem" style={SCROLLBTNSTYLE} onClick = {scrollLeft} >
                    <FontAwesomeIcon  icon={faLessThan}/>
                </div>

                <div className = {`movieList genre-${genre}`} > 

                    { (loadState) ? <h1>Loading</h1> : MOVIESJSX }

                </div>
                
                {/* <div className="scrollRight scElem" style={SCROLLBTNSTYLE} onClick = {scrollRight}>
                    <FontAwesomeIcon  icon={faGreaterThan}/>
                </div> */}


            </div>
            
            

        </div>
        
    )
}