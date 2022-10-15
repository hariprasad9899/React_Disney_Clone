import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import WatchFlex from "./WatchFlex";
// tt4169250

export default function Watch(){

    // const {imdbID} = useParams();
    const imdbID = 'tt4169250';
    const [movieInfo, setMovieInfo] = useState('');


    useEffect( () => {        
        
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=f2a05d22`).
        then(res => res.json()).
        then(data => setMovieInfo(data));
        
    }, [])


    return (    
        <div className="watchContent">
            <WatchFlex info={movieInfo}/>
        </div>
    )
}