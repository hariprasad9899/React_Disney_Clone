import React, { useEffect, useState } from 'react';
import Home from './MainComponents/Home';
import {Route, Routes} from 'react-router-dom';
import Menu from './MainComponents/MenuComponents/Menu';
import Watch from './MainComponents/Content/Watch';

export default function App() {
    return(
        <>
            <Menu />
            <Routes>
                <Route path='/' element = {<Watch />}></Route>
                <Route path='/watch' element = {<Watch />}>
                    <Route path= ':imdbID' element = {<Watch />} />
                </Route>
            </Routes>
        </>
    )
}