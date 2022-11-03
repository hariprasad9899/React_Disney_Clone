import React, { useState, useContext, useEffect } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Loginpop from "../MenuComponents/Loginpop/Loginpop";
import {useNavigate} from 'react-router-dom';
import '../../Sass/subscribe.scss';
import { BlurContext } from "../Context/BlurContext";

export default function SubscribeMenu({scrollState}){
    
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

    const MENUBG = {
        backgroundColor: (scrollState) ? '#141b29' : 'transparent',
    }


    const changeVal = (val) => {
        setChoosenVal(val);
        setLangState(false);
    } 


    const [loginPop, setLoginPop] = useState(false);

    const {blur,setBlur} = useContext(BlurContext);

    const openLoginPop = ()=> {
        setLoginPop(true);
        setBlur(true);
    }

    const closeLoginPop = () => {
        setLoginPop(false);
        setBlur(false);
    }


    return (
            
            <div className="topMenu" style={MENUBG}>

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

                    <div className="inner-lang-opt" style={LANG_STYLE.innerDiv}  >
                        <div className="lang-names" onClick={() => changeVal('English')} ><p>English</p></div>
                        <div className="lang-names"  onClick={() => changeVal('Hindi')} ><p>Hindi</p></div>
                        <div className="lang-names"  onClick={() => changeVal('Tamil')} ><p>Tamil</p></div>
                        <div className="lang-names"  onClick={() => changeVal('Telugu')} ><p>Telugu</p></div>
                    </div>
                </div>

                <button className="logBtn" onClick={openLoginPop}>Log in</button>

                {loginPop && blur && <Loginpop  closePop = {closeLoginPop} loginPop = {loginPop} />}

            </div>
    )

}