import React from "react";
import Movies from "./Movies";

export default function Content() {

    return (

        <div className="content-container">
            <Movies  genre = {"trending"} />
            <Movies  genre = {"recommended"} />
        </div>
    )
}