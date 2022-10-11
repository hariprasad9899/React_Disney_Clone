import React from "react";
import {useParams} from 'react-router-dom';


export default function Watch(){

    const {imdbID} = useParams();

    return (    
        <div>
            <h1 style={{color: "white"}}>Watching Movie {imdbID} </h1>
        </div>
    )
}