import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import PopupPortal from "./PopupPortal";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faShareNodes, faPlay, faAdd, faCheck , faLink} from '@fortawesome/free-solid-svg-icons';

export default function WatchOptions(){

    const [watchState, setWatchState] = useState(false);
    const [watchListState, setWatchListState] = useState(true);
    const [popupState, setPopupState] = useState(false);
    const [navState, setNavState] = useState(false);
    
    const addWatchlist = (e) => {
        setWatchState(prevVal => !prevVal)
        setPopupState(true);
        setTimeout(() => {
            setPopupState(false)
        },1500)
        setWatchListState(false);
        e.stopPropagation();
    }

    const removeWatchlist = (e) => {
        setWatchState(prevVal => !prevVal);
        setPopupState(true);
        setTimeout(() => {
            setPopupState(false)
        },1500)
        setWatchListState(true);
        e.stopPropagation();
    }


    let NAVSTLYE = {
        right: (navState) ? '25%' : '20%',
        opacity: (navState) ? '1' : '0',
        visibility: (navState) ? 'visible': 'hidden',
    }

    return (
        <div className="addOptions">

                <a className="watchBtn">
                    <FontAwesomeIcon icon={faPlay} />
                    <h3>Watch Movie</h3>
                </a>
                
                
                <a className="addBtn">
                    {(watchState) ? <FontAwesomeIcon className="addFont check" icon={faCheck} onClick={addWatchlist} />
                    : 
                    <FontAwesomeIcon className="addFont" icon={faAdd}  onClick={removeWatchlist}/>
                    }
                    <p>WATCHLIST</p>
                </a>

                <a className="shareBtn" onMouseOver = {() => setNavState(true)} onMouseLeave = {() => setNavState(false)}>
                    <FontAwesomeIcon className="shareFont"  icon={faShareNodes}  /> 
                    <p>SHARE</p>

                    <nav className="socialNav" style={NAVSTLYE}>
                        <a><FontAwesomeIcon className="soc" icon={faFacebookSquare} /></a>
                        <a><FontAwesomeIcon className="soc" icon={faTwitter} /></a>
                        <a><FontAwesomeIcon className="soc" icon={faLink} /></a>
                    </nav>

                </a>

                { popupState && <PopupPortal added = {!watchListState} visibleState={!watchListState} /> }

        </div>
    )
}