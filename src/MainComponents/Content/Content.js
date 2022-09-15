import React, { useEffect, useState } from "react";


export default function Content() {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const [movies, setMovies] = useState('');

    useEffect(() => {
        fetch('https://imdb-api.com/en/API/Top250Movies/k_va8o768g', requestOptions)
        .then(response => response.json())
        .then(result => setMovies(result.items))
    }, [])


    




    return (
        <h1>Hello World!!!</h1>
    )
}