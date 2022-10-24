import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Loginpop from "../MenuComponents/Loginpop/Loginpop";
import {useNavigate} from 'react-router-dom';
import '../../Sass/subscribe.scss';

export default function Subscribe(){
    
    const navigate = useNavigate();

    return (
        <div className="subscribeComponent">
            
            <div className="topMenu">

                <div className="plan-state">
                    <img src= '../imgs/disneyLogo.svg'></img>
                    <div className="select-plan">
                        <span className="active-sel">Select Plan </span>
                        <span><FontAwesomeIcon className="angle" icon={faAngleRight} /></span>
                        <span> Log in </span>
                        <span><FontAwesomeIcon className="angle" icon={faAngleRight} /></span>
                        <span> Pay</span>
                    </div>
                </div>
                
                <div className="lang-opt">
                    
                    <div className="view">

                        <p>View in English</p>
                        <FontAwesomeIcon icon={faAngleUp} />

                    </div>

                </div>

                <button className="logBtn">Log in</button>

            </div>

        </div>
    )

}