import React from "react";
import '../../Sass/movie.scss';


export default function MovieCard({movieInfo}){

    let poster = movieInfo.Poster;

    let CARD_STYLE = {
        backgroundImage: `url(${poster})`,  
    }

    function trimMoviePlot(plotData){
        let moviePlotArr = plotData.split(' ').slice(0,10).join(' ');
        return moviePlotArr + '...';
    }

    return (
        <div className="movieCard"  style={CARD_STYLE} >
            <div className="infoCard">
                <p className="movieName">{movieInfo.Title}</p>
                <p className="movieDetails">{movieInfo.Runtime},{movieInfo.Genre},{movieInfo.Language}</p>
                <p className="moviePlot">{trimMoviePlot(movieInfo.Plot)}</p>
            </div>
        </div>
    )

}