import React, { useState, useEffect } from "react";
import '../../Sass/watch.scss';
import runtime from "../Helpers/runtime";
export default function WatchFlex({info}){
    
    let FLEXSTYLE = {
        backgroundImage: `url(${info.Poster})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: '25% 100%',
    }

    console.log(info)

    return (
        <div className="watchFlexCard" style={FLEXSTYLE}>

            <div className="watchFlexContent">

                 <h2>{info.Title}</h2>   

                 <div className="addInfo">
                    <span> { (info.Runtime) ? runtime(info.Runtime) : '' } </span>
                    <span><>&#8226;</></span>
                    <span>{info.Year}</span>
                    <span><>&#8226;</></span>
                    <span>{info.Genre}</span>
                    <span><>&#8226;</></span>
                    <span>{info.imdbRating}</span>
                 </div>

                 <div className="addPlot">
                    <p>{info.Plot}</p>
                 </div>
            </div>

        </div>
    )

}