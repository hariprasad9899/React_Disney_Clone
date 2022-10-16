import React from "react";
import '../../Sass/footer.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer(){


    return (

        <footer className="footerContent">

            <div className="copyRightContent">
                <p>In case of any query,email us at <a href='mailto:subscribe@hotstar.com'>subscribe@hotstar.com</a></p>
                <nav>
                    <a href="https://www.hotstar.com/in/about-us" target= '_blank'>About Disney+ Hotstar</a>
                    <a href="https://www.hotstar.com/in/about-us" target= '_blank'>Term Of Use</a>
                    <a href="https://www.hotstar.com/in/privacy-policy" target= '_blank'>Privacy Policy</a>
                    <a href="https://www.hotstar.com/in/privacy-policy" target= '_blank'>FAQ</a>
                    <a href="https://help.hotstar.com/in/en/support/tickets/new" target= '_blank'>Feedback</a>
                    <a href="https://careers.hotstar.com/" target= '_blank'>Careers</a>
                </nav>
                <p>
                    © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, 
                    and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.
                </p>
                
            </div>
            
            <div className="connect">
                
                <div className="social">
                    <p>Connect with us</p>
                    <div className="socialIcons">
                        <a href="https://www.facebook.com/DisneyPlusHotstar" target="_blank">
                            <FontAwesomeIcon className="socFont" icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com/DisneyPlusHS" target="_blank">
                            <FontAwesomeIcon className="socFont" icon={faTwitter} />
                        </a>
                        
                    </div>
                </div>
                
                <div className="app">
                    <p>Disney+ Hotstar App</p>
                    <div className="appIcons">
                        <a className="googlePlay">
                            {/* <img src = './imgs/googleBadge.svg' /> */}
                        </a>
                        <a className="appStore"></a>
                    </div>
                </div>

            </div>


        </footer>


    )

}

