import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Loginpop from "../MenuComponents/Loginpop/Loginpop";
import {useNavigate} from 'react-router-dom';
import '../../Sass/subscribe.scss';

export default function Subscribe(){
    
    const navigate = useNavigate();

    const [langState, setLangState ] = useState(false);
    const [choosenVal, setChoosenVal] = useState('English');

    const LANG_STYLE = {

        innerDiv: {
            display: (langState) ? 'flex' : 'none',
        },

        viewBg: {
            backgroundColor: (langState) ? '#192135' : 'transparent'
        }
        
    } 


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
                
                <div className="lang-opt" style={LANG_STYLE.viewBg}>
                    
                    <div className="view"  onClick={() => setLangState(!langState)}>

                        <p>View in <span className="eng">{choosenVal}</span></p>
                        <FontAwesomeIcon icon={(langState) ? faAngleUp : faAngleDown} />
                        
                    </div>

                    <div className="inner-lang-opt" style={LANG_STYLE.innerDiv}>
                        <div className="lang-names"><p>English</p></div>
                        <div className="lang-names"><p>Hindi</p></div>
                        <div className="lang-names"><p>Tamil</p></div>
                        <div className="lang-names"><p>Telugu</p></div>
                    </div>
                </div>

                <button className="logBtn">Log in</button>

            </div>

        </div>
    )

}