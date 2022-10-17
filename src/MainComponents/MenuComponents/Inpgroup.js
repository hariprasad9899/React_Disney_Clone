import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationTriangle  } from '@fortawesome/free-solid-svg-icons';

export default function Inpgroup({dispatch,phoneNumberInput, ERRORSTYLE}) {




    return (        
        <div className="inpGroup">

            <label className="labelInp" style={ERRORSTYLE.borderStyle}>
                <p>+91</p>
                <p className="sep">|</p>
                <input 
                    type="text" 
                    className="phoneNumber" 
                    placeholder="Enter your mobile number" 
                    value={phoneNumberInput} 
                    onChange = {(e) => dispatch({type: 'INP', payload: {value: e.target.value}})}
                >
                </input>
            </label>
            
            <div className="errorInfo" style={ERRORSTYLE.displayStyle}>
                <p>Please enter your mobile number</p>
                <FontAwesomeIcon className="socFont" icon={faExclamationTriangle} />
            </div>
        </div>

    )

}