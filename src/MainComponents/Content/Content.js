import React from "react";
import Movies from "./TrendingMovies";

export default function Content() {


    return (
        <>
            <Movies  genre = {"trending"} />
            <Movies  genre = {"recommended"} />
        </>
        
    )
}