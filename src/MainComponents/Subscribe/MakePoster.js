import React, { useEffect, useState } from "react";

export default function MakePoster({moviePoster}){

    return (
        <div className="poster-box">
            <img className="bgImg" src={moviePoster}></img>
        </div>
    )



}