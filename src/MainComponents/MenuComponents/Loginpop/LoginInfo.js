import React from "react";
import Inpgroup from "./Inpgroup";

export default function LoginInfo({logState, dispatch, ERRORSTYLE}){


    return (
        <div className="loginInfo">
                
               { logState.phoneNumberInfo &&   
                    <>  
                        <h4>Login to continue</h4>
                        <a className="checkSocial" onClick={() => dispatch({type: 'EMAIL'})}> Have a Facebook/Email Account</a>
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
    )

}