import React from "react";
import ReactDOM from "react-dom/client";
import PortalReactDom from 'react-dom';
import '../../Sass/loginpop.scss';

export default function Loginpop({closePop}){


    return PortalReactDom.createPortal(
        <div className="loginPop">

            <div className="btnSet">
                <p className="backBtn" onClick={closePop}><>&#129128;</></p>
                <p className="closeBtn"><>&times;</></p>
            </div>
    
            <div className="loginInfo">
                <h4>Login to continue</h4>
                <a className="checkSocial"> Have a Facebook/Email Account</a>
                <p>or</p>
            </div>
                
                


        </div>, 
        document.getElementById('root')
    )
}