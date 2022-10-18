import React, { useEffect } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationTriangle , faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export default function EmailInfo({logState,dispatch}){


    const ERRORSTYLE = {
        borderStyle: {
            borderColor: (logState.emailError) ? 'red' : '#1f80e0',
        },
        displayStyle: {
            visibility: (logState.emailError) ? 'visible' : 'hidden'
        }
    }


    useEffect(() => {

        let timer;
        if(logState.haveEmailState){
            timer = setTimeout(() => {
                dispatch({type: 'EMAILERROR' })
            },8000)
        }

        return () => {
            clearTimeout(timer)
        }
    },[logState])

    
    return (
        <div className="emailInfo">
            
            <p className="haveAcc">Have an Email or Facebook account?</p>

            <div className="inpGroupEmail">

                <input 
                    type="email"
                    className="emailInp" 
                    placeholder="Enter your email" 
                    value = {logState.emailInput}
                    style = {ERRORSTYLE.borderStyle}
                    onChange = {(e) => dispatch({type: 'EMAILINP', payload: {value: e.target.value}})}
                />
                
            </div>

            <div className="emailErrorInfo" style={ERRORSTYLE.displayStyle}>
                <p>Please enter your mobile number</p>
                <FontAwesomeIcon className="socFont" icon={faExclamationTriangle} />
            </div>

            <div className="btnCon">
                <p>CONTINUE</p>
                <FontAwesomeIcon className="angle" icon={faAngleRight} />
            </div>

            <p className="orWord">or</p>

            <div className="btnSoc">
                <FontAwesomeIcon className="fbIcon" icon={faFacebookSquare} />
                <p>LOGIN WITH FACEBOOK</p>
            </div>
            

        </div>
    )

}