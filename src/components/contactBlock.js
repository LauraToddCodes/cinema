import React from "react";

function ContactBlock() {
    return(
        <div id="contactContainer">
            <iframe id="gmap_canvas" title="map" src="https://maps.google.com/maps?q=21%20St%20Marks%20Road%2C%20Bristol%2C%20BS5%200LN&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <div id="contactText">
                <p>hello@talkingpictures.com</p>
                <p>0457 123 45 67</p>
                <p>Talking Pictures<br />
                21 St Marks Road<br />
                Bristol<br />
                BS5 0LN</p>
            </div>
        </div>
    )
}

export default ContactBlock