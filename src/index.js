import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './CSS/basic.css';
import './CSS/menu.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// https://developers.themoviedb.org/3/reviews/get-review-details
root.render(
    <>
        <App />
    </>
)