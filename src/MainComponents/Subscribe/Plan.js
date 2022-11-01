import React, { useState } from "react";
import '../../Sass/plan.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faAngleRight, faLeaf } from '@fortawesome/free-solid-svg-icons';

export default function Plan(){


    const [plan, setPlan] = useState({
        super: true,
        premium1: false,
        premium2: false
    });

    const changePlan = (planVal) => {

        switch(planVal) {

            case "s1": 
                setPlan((prevPlan) => {
                    return {...prevPlan, super:true, premium1:false, premium2:false}
                }) 
                break;
            
            case "p1":
                setPlan((prevPlan) => {
                    return {...prevPlan, premium1:true, super:false, premium2:false }
                })
                break;
            
            case "p2": 
                setPlan((prevPlan) => {
                    return {...prevPlan, premium2:true, premium1:false, super:false}
                })
        }

    }


    let c1 = (plan.super) ? 'plan-btn active' : 'plan-btn'
    let c2 = (plan.premium1) ? 'plan-btn active': 'plan-btn'
    let c3 = (plan.premium2) ? 'plan-btn active': 'plan-btn'

    return (
        <div className="plan-section">

            <p className="head-sec">Subscribe to watch all content on Disney+ Hotstar</p>

            <div className="plan-div">

                <div className="header-row">
                    
                    <div className="plan-info">
                        <p></p>
                    </div>

                    <div className={(plan.super) ? "plan-super active" : "plan-super"}>
                        <p>Super</p>
                    </div>

                    <div className={(!plan.super) ? "plan-premium active" : "plan-premium"}>
                        <p>Premium</p>
                    </div>

                </div>

                <div className="inner-plan-div">

                    <div className="content-row first-row">

                        <div className="plan-info">
                            <p>All content</p>
                            <p className="spl-line">Movies, live sports, TV, Specials</p>
                        </div>

                        <div className="plan-super">
                            <FontAwesomeIcon icon={faCheck} className = "fa-Font" />
                        </div>

                        <div className="plan-premium">
                            <FontAwesomeIcon icon={faCheck} className = "fa-Font" />
                        </div>

                    </div>

                    <div className="content-row">

                        <div className="plan-info">
                            <p>Watch on TV or Laptop</p>
                        </div>

                        <div className="plan-super">
                            <FontAwesomeIcon icon={faCheck} className = "fa-Font" />
                        </div>

                        <div className="plan-premium">
                            <FontAwesomeIcon icon={faCheck} className = "fa-Font" />
                        </div>
                        
                    </div>

                    <div className="content-row">

                        <div className="plan-info">
                            <p>Add free movies and shows (except sports)</p>
                        </div>

                        <div className="plan-super">
                            <FontAwesomeIcon icon={faTimes} className = "fa-Font" />
                        </div>

                        <div className="plan-premium">
                            <FontAwesomeIcon icon={faCheck} className = "fa-Font" />
                        </div>
                        
                    </div>

                    <div className="content-row">

                        <div className="plan-info">
                            <p>Number of devices that can be logged in</p>
                        </div>

                        <div className="plan-super">
                            <p>2</p>
                        </div>

                        <div className="plan-premium">
                            <p>4</p>
                        </div>
                        
                    </div>

                    <div className="content-row">

                        <div className="plan-info">
                            <p>Max video quality</p>
                        </div>

                        <div className="plan-super">
                            <p>Full HD (1080p)</p>
                        </div>

                        <div className="plan-premium">
                            <p>4k (2160px)</p>
                        </div>
                        
                    </div>

                    <div className="content-row">

                        <div className="plan-info">
                            <p>Max audio quality</p>
                        </div>

                        <div className="plan-super">
                            <p>Dolby 5.1</p>
                        </div>

                        <div className="plan-premium">
                            <p>Dolby 5.1</p>
                        </div>
                        
                    </div>

                </div>
                
                <div className="choose-plan">
                    
                    <div className={c1} onClick={() => changePlan("s1")}>
                        <p className="selctedPlan">Super</p>
                        <p className="plan-pay">
                            <span className="ruppee">₹</span>
                            <span className="amount">899</span>
                            <span className="duration">/Year</span>
                        </p>

                        <div className="tickMark">
                            <FontAwesomeIcon icon={faCheck} color = "#1a2238" />
                        </div>

                    </div>

                    <div className={c2} onClick={() => changePlan("p1")}>
                        <p className="selctedPlan">Premium</p>
                        <p className="plan-pay">
                            <span className="ruppee">₹</span>
                            <span className="amount">1499</span>
                            <span className="duration">/Year</span>
                        </p>

                        <div className="tickMark">
                            <FontAwesomeIcon icon={faCheck} color = "#1a2238" />
                        </div>


                    </div>

                    <div className={c3} onClick={() => changePlan("p2")}>
                        <p className="selctedPlan">Premium</p>
                        <p className="plan-pay">
                            <span className="ruppee">₹</span>
                            <span className="amount">299</span>
                            <span className="duration">/Month</span>
                        </p>

                        <div className="tickMark">
                            <FontAwesomeIcon icon={faCheck} color = "#1a2238" />
                        </div>

                    </div>

                </div>

                <div className="plan-cont">
                    <p>CONTINUE WITH {(plan.super) ? "SUPER" : "PREMIUM"}</p>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>


            </div>

        </div>
    )

}