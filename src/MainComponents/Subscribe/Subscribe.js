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

    const exceptionClassNames = ['inner-plan-div','content-row','plan-info','plan-super','plan-premium']

    useEffect(() => {
        
        function detectScroll(e) {

            if(!exceptionClassNames.includes(e.target.className))  {
                if(e.deltaY < 0)  {
                    setScrollState(false)
                } 
                else if(e.deltaY > 0) {
                    setScrollState(true);
                }
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