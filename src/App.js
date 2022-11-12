import React, { createContext, useEffect, useState, useContext } from 'react';
import { BlurContext } from './MainComponents/Context/BlurContext';
import { ClickContext } from './MainComponents/Context/ClickContext';
import Main from "./Main";
import { BrowserRouter } from 'react-router-dom';

export default function App() {

    const [blur,setBlur] = useState(false);
    return (
        
        <BlurContext.Provider value={{blur,setBlur}}>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </BlurContext.Provider>
        
    )

}