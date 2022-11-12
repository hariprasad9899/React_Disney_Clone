import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import WatchFlex from "./WatchFlex";
import Menu from "../MenuComponents/Menu";
// tt4169250

export default function Watch(){

    const {imdbID} = useParams();
    // const imdbID = 'tt4169250';
    console.log(imdbID);
    const [movieInfo, setMovieInfo] = useState('');


    useEffect( () => {        
        
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=f2a05d22`).
        then(res => res.json()).
        then(data => setMovieInfo(data));
        
    }, [imdbID])


    return (    

        <>
             <Menu />
             <div className="watchContent">
                <WatchFlex info={movieInfo}/>
            </div>

        </>
        
    )
}