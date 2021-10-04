import React from 'react';
import "../styles/Contact.css";
const Contact = () => {

    return (
        <div className = "contact-container container">
            <div className = "row">
                <div className = "col-12">
                    <div className = "contact-title">Contact</div>
                </div>
            </div>
            <hr />
            <div className = "row">
                <div className = "col-12">
                    <div className = "contact-body">
                        <div>
                            I am currently interested in new development opportunities.
                        </div>
                        <div>
                            To get in contact, please send me an email at <a className = "contact-email" href="mailto: jegrieve7@gmail.com" target="_blank">jegrieve7@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Contact;