import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom/client";
import PortalReactDom from 'react-dom';
import '../../../Sass/loginpop.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationTriangle  } from '@fortawesome/free-solid-svg-icons';
import Inpgroup from "./Inpgroup";
import LoginInfo from "./LoginInfo";
import EmailInfo from "./EmailInfo";

export default function Loginpop({closePop}){

    const initState = {
        haveBackBtn: false,
        haveEmailState: true,
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
        EMAIL: 'EMAIL'
    }

    useEffect(() => {

        function errorAlert(){
            setTimeout(() => {
                dispatch({type: 'ERROR'})
            }, 5000);
        }
        
        errorAlert()

        return ()=> {
            errorAlert;
        }
        
    },[logState])

    
    const reducer = (logState,action) => {

        switch(action.type) {

            case ACTIONS.INP: 
                return { ...logState, phoneNumberInput: action.payload.value, phoneNumberInfo: false, haveBackBtn: true, errorAlert:false }

            case ACTIONS.CLOSE: 
                closePop()
                return {...logState, ...initState}

            case ACTIONS.BACK:
                return {...logState, haveBackBtn:false, phoneNumberInfo: true, haveEmailState:false}
                
            case ACTIONS.ERROR:
                return {...logState,errorAlert: true}

            case ACTIONS.EMAIL:
                return {...logState,haveEmailState:true, haveBackBtn:true}

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
        visibility: (logState.haveBackBtn) ? 'visible': 'hidden',
    }

    return PortalReactDom.createPortal(

        <div className="loginPop">

            <div className="btnSet">

                <p className="backBtn" style={BACKBTNSTYLE} onClick = {() => dispatch({type: 'BACK'})} ><>&#129128;</></p>
                <p className="closeBtn" onClick={() => dispatch({type: 'CLOSE'})}><>&times;</></p>

            </div>
    
            { (!logState.haveEmailState)  ? 
                <LoginInfo  logState = {logState} dispatch = {dispatch} ERRORSTYLE = {ERRORSTYLE} /> 
                : 
                <EmailInfo />
            }

        </div>, 
        document.getElementById('root')
    )
}