import React from 'react';
import Home from './Home';

export default function App() {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
       
    fetch('https://imdb-api.com/en/API/Title/k_g65mxlt1/tt1375666', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))

    return(
        <Home />
    )
}