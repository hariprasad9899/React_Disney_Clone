import React from "react";

export default function MovieCard({movieInfo}){

    

    return (
        <div className="movieCard">
            <p>{JSON.stringify(movieInfo)}</p>
        </div>
    )

}