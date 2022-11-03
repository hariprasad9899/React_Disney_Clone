import React, { useState, useContext, useEffect } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Loginpop from "../MenuComponents/Loginpop/Loginpop";
import {useNavigate} from 'react-router-dom';
import '../../Sass/subscribe.scss';
import { BlurContext } from "../Context/BlurContext";
import SubscribeMenu from "./SubscribeMenu";
import Plan from "./Plan";
import AutoSlide from "./AutoSlide";

export default function Subscribe(){
    
    
    const [scrollState, setScrollState] = useState(false);
    let containerElement = null;

    const setRefElement = (element) => {
        containerElement = element;
    };


    useEffect(() => {
        
        function detectScroll(e) {
            if(e.deltaY < 0)  {
                setScrollState(false)
                console.log("scrolling up")
            } 
            else if(e.deltaY > 0) {
                setScrollState(true);
                console.log("scrolling down")
            }
        }

        containerElement.addEventListener('wheel', (e) => detectScroll(e)) 

        return containerElement.removeEventListener('wheel',(e) => detectScroll(e))
    })





    return (
        <div className="subscribeComponent" ref={setRefElement}>
            
            <SubscribeMenu scrollState = {scrollState} />
                
            <Plan />

            <AutoSlide />
            
        </div>
    )

}