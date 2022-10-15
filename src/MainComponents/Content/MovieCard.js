import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import '../../Sass/movie.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faL, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PopupPortal from "./PopupPortal";
import runtime from "../Helpers/runtime";
import {useNavigate} from 'react-router-dom';

export default function MovieCard({movieInfo}){

    const navigate = useNavigate();

    let poster = movieInfo.Poster;


    let CARD_STYLE = {
        backgroundImage: `url(${poster})`,  
    }

    const trimMoviePlot = (plotData) => {
        let moviePlotArr = plotData.split(' ').slice(0,10).join(' ');
        return moviePlotArr + '...';
    }

    const [watchListState, setWatchListState] = useState(true);
    const [popupState, setPopupState] = useState(false);

    const addToWatchList = (e) => {
        setPopupState(true);
        setTimeout(() => {
            setPopupState(false)
        },1500)
        setWatchListState(false);
        e.stopPropagation();
    }

    const removeFromWatchList = (e) => {
        setPopupState(true);
        setTimeout(() => {
            setPopupState(false)
        },1500)
        setWatchListState(true);
        e.stopPropagation();
    }

    const navigateToWatch = (e) => {
        console.log(e.target);
        if(e.target.className !== 'watchList' && e.target.className !== 'playButton') {
            navigate(`/watch/${movieInfo.imdbID}`)
        }
        
    }

    return (
        <div className="movieCard"  style={CARD_STYLE} onClick = {navigateToWatch} >
            <div className="infoCard">

                <p className="movieName">{movieInfo.Title}</p>
                <p className="movieDetails">{runtime(movieInfo.Runtime)},{movieInfo.Genre},{movieInfo.Language}</p>
                <p className="moviePlot">{trimMoviePlot(movieInfo.Plot)}</p>
                <div className="cardBtns playButton">
                    <FontAwesomeIcon icon={faPlay} />
                    <p>WATCH MOVIE</p>
                </div>
                
                {

                    (watchListState) ? 

                    <div className="cardBtns watchList" onClick={addToWatchList}>
                    <FontAwesomeIcon icon={faAdd}  />
                    <p>ADD TO WATCHLIST</p>
                    </div>

                    : 

                    <div className="removeWatch" onClick={removeFromWatchList}>
                        <FontAwesomeIcon icon={faCheck} className = "blueTick" />
                        <p>REMOVE FROM WATCHLIST</p>
                    </div>
                }
                
            </div>
            { popupState && <PopupPortal added = {watchListState} visibleState={watchListState} /> }
        </div> 

    )
}