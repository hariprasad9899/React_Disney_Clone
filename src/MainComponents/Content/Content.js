import React, { useState } from "react";
import Movies from "./Movies";
import '../../Sass/movie.scss';

export default function Content() {
    
    return (
            <div className="content-container" >
                <Movies  genre = {"trending"} />
                <Movies  genre = {"recommended"} />
                <Movies  genre = {"new"} />
            </div>
    )
}