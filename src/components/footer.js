import React from "react";
import FBIcon from "./images/footer/facebookIcon.png";
import InstaIcon from "./images/footer/instagramIcon.png";
import TwitterIcon from "./images/footer/twitterIcon.png";

function Footer(){
    return(
        <footer>
            <div id="footerSocials">
                <img src={InstaIcon} alt="instagram icon"/>
                <img src={FBIcon} alt="facebook icon"/>
                <img src={TwitterIcon} alt="twitter icon"/>
            </div>
            <div id="footerText" >
                <p>Talking Pictures<br/>
                21 St Marks Road, Bristol, BS5 0LN<br />
                hello@talkingpictures.com<br />
                0457 123 45 67<br />
                © Copyright 2020 Talking Pictures</p>
            </div>
        </footer>
    )
}

export default Footer;