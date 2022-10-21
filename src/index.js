import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './Sass/index.scss';
import './Sass/slick-carousel/slick/slick.scss';
import './Sass/slick-carousel/slick/slick-theme.scss';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// https://developers.themoviedb.org/3/reviews/get-review-details

// f2a05d22

root.render(

    <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
    </React.StrictMode>
    
)