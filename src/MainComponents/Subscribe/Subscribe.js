import React, { useState, useContext } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Loginpop from "../MenuComponents/Loginpop/Loginpop";
import {useNavigate} from 'react-router-dom';
import '../../Sass/subscribe.scss';
import { BlurContext } from "../Context/BlurContext";
import SubscribeMenu from "./SubscribeMenu";

export default function Subscribe(){
    
    return (
        <div className="subscribeComponent">
            
            <SubscribeMenu />
            
            
        </div>
    )

}