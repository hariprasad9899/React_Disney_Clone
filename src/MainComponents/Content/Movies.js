import React, {useState, useEffect, useRef} from "react";
import { nanoid } from 'nanoid';
import movieDb from "../APIData/Data";
import MovieCard from "./MovieCard";
import '../../Sass/movie.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";



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


    // Slick Slider // 

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 7.15,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
            },

            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],

        nextArrow: <SampleNextArrow className = "btns" />,
        prevArrow: <SamplePrevArrow className = "btns" />
    };
      
    return (

        <div className="movie-container" ref = {ListContainer}>
            <a className="genTitle">{movieDb[genre].title}</a>
                <div className = {`movieList genre-${genre}`} > 
                    
                    <Slider {...settings}>
                        { (loadState) ? <h1>Loading</h1> : MOVIESJSX }
                    </Slider>

                </div>
        </div>
    )
}