import React, { useState, useEffect } from "react";
import '../../Sass/watch.scss';
import runtime from "../Helpers/runtime";
import WatchOptions from "./WatchOptions";
import shortenPara from "../Helpers/ShortenPara";




export default function WatchFlex({info}){

    return (
        <div className="watchFlexCard">

            <div className="watchFlexContent">

                <img className="posterImg" src={info.Poster} alt=" :( Image not found"></img>        

                <h2 className="movieTitle">{info.Title}</h2>   
                
                <div className="addInfo">
                    <span> { (info.Runtime) ? runtime(info.Runtime) : '' } </span>
                    <span className="bull"><>&#8226;</></span>
                    <span>{info.Year}</span>    
                    <span className="bull"><>&#8226;</></span>
                    <span>{info.Genre}</span>
                    <span className="bull"><>&#8226;</></span>
                    <span>{info.imdbRating}</span>
                </div>

                <div className="addPlot">
                    <p>{shortenPara(info.Plot)}</p>
                </div>
                
            </div>

            <WatchOptions />

        </div>
    )

}