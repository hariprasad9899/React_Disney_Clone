import React, { createContext, useEffect, useState, useContext, useReducer } from 'react';
import Home from './MainComponents/Home';
import {Route, Routes} from 'react-router-dom';
import Menu from './MainComponents/MenuComponents/Menu';
import Watch from './MainComponents/Content/Watch';
import Footer from './MainComponents/Content/Footer';
import './Sass/index.scss';
import { BlurContext } from './MainComponents/Context/BlurContext';
import Subscribe from './MainComponents/Subscribe/Subscribe';
import { ClickContext } from './MainComponents/Context/ClickContext';



export default function Main() {

    const {blur,setBlur} = useContext(BlurContext);

    let overlayStyle = {
        display: (blur) ? 'block': 'none'
    }
    

    return(

        <div className='container'>
                    
                    <Routes>
                            <Route index  path='/' element = {<Home />}></Route>
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