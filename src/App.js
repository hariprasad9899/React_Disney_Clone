import React, { createContext, useEffect, useState, useContext } from 'react';
import { BlurContext } from './MainComponents/Context/BlurContext';
import { ClickContext } from './MainComponents/Context/ClickContext';
import Main from "./Main";

export default function App() {

    const [blur,setBlur] = useState(false);
    return (
        
        <BlurContext.Provider value={{blur,setBlur}}>
            <Main />
        </BlurContext.Provider>
        
    )

}