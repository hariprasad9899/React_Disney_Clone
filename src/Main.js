import React, { createContext, useEffect, useState, useContext, useReducer } from 'react';
import Home from './MainComponents/Home';
import {Route, Routes} from 'react-router-dom';
import Menu from './MainComponents/MenuComponents/Menu';
import Watch from './MainComponents/Content/Watch';
import Footer from './MainComponents/Content/Footer';
import './Sass/index.scss';
import { BlurContext } from './MainComponents/Context/BlurContext';
import Subscribe from './MainComponents/Subscribe/subscribe';

export default function Main() {

    const {blur,setBlur} = useContext(BlurContext);

    let overlayStyle = {
        display: (blur) ? 'block': 'none'
    }
     

    return(
        

            <div className='container'>

                    
                    <Routes>
                        <Route path='/' element = {<Subscribe />}></Route>
                        <Route path='/watch' element = {<Watch />}>
                            <Route path= ':imdbID' element = {<Watch />} />
                        </Route>
                        <Route path='/subscribe' element = {<Subscribe />}></Route>
                    </Routes>
                <Footer />

                <div style={overlayStyle}  onClick = {() => setBlur(false)}  className='overLay'></div>

            </div>
     
    )
}