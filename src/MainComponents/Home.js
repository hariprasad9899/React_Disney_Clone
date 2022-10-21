import React, { useContext, useEffect } from 'react';
import Menu from './MenuComponents/Menu';
import Content from './Content/Content';
import { BlurContext } from './Context/BlurContext';

export default function Home() {


    return(
        <>  
            <Menu />
            <Content />
        </>
    )
}