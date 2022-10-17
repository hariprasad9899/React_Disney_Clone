import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom/client";
import PortalReactDom from 'react-dom';
import '../../Sass/loginpop.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationTriangle  } from '@fortawesome/free-solid-svg-icons';
import Inpgroup from "./Inpgroup";

export default function Loginpop({closePop}){


    

    const initState = {
        haveEmailState: false,
        phoneNumberInfo: true,
        phoneNumberInput: '',
        borderBottomFocus: false,
        errorAlert: false,
    }

    const ACTIONS = {
        INP: 'INP',
        CLOSE: 'CLOSE',
        BACK:'BACK',
        ERROR:'ERROR',
    }

    useEffect(() => {
        function errorAlert(){
            setTimeout(() => {
                dispatch({type: 'ERROR'})
            }, 5000);
        }
        
        errorAlert()

    },[logState])
    

   


    const reducer = (logState,action) => {
        switch(action.type) {
            case ACTIONS.INP: 
                return { ...logState, phoneNumberInput: action.payload.value, phoneNumberInfo: false, haveEmailState: true, errorAlert:false }
            case ACTIONS.CLOSE: 
                closePop()
                return {...logState, ...initState}
            case ACTIONS.BACK:
                return {...logState, haveEmailState:false, phoneNumberInfo: true}
            case ACTIONS.ERROR:
                return {...logState,errorAlert: true}
        }
    }

    const [logState, dispatch] = useReducer(reducer, initState);

    let ERRORSTYLE = {
        borderStyle: {
            borderColor: (logState.errorAlert) ? 'red' : '#1f80e0',
        },
        displayStyle: {
            visibility: (logState.errorAlert) ? 'visible' : 'hidden'
        }

    }

    const BACKBTNSTYLE = {
        visibility: (logState.haveEmailState) ? 'visible': 'hidden',
    }

    return PortalReactDom.createPortal(

        <div className="loginPop">

            <div className="btnSet">

                <p className="backBtn" style={BACKBTNSTYLE} onClick = {() => dispatch({type: 'BACK'})} ><>&#129128;</></p>
                <p className="closeBtn" onClick={() => dispatch({type: 'CLOSE'})}><>&times;</></p>

            </div>

           <div className="loginInfo">
                
               { logState.phoneNumberInfo &&   
                    <>  
                        <h4>Login to continue</h4>
                        <a className="checkSocial"> Have a Facebook/Email Account</a>
                        <p>or</p>
                    </>
                }
                
                { !logState.phoneNumberInfo && <h4>Continue using Phone</h4>}


                <Inpgroup dispatch = {dispatch} phoneNumberInput = {logState.phoneNumberInput} ERRORSTYLE = {ERRORSTYLE} />

                { !logState.phoneNumberInfo && <div className="numInfo">
                    <button className="continue">CONTINUE</button>
                    <p className="terms">By Proceeding you agree to the 
                        <a href="https://www.hotstar.com/in/terms-of-use"> Terms of use</a> and 
                        <a href="https://www.hotstar.com/in/privacy-policy"> Provacy policy</a></p>
                </div> }
            
            </div>

        </div>, 
        document.getElementById('root')
    )
}