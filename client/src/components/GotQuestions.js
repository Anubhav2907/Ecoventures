import React from "react";
import "./GotQuestions.css";
import svg from "../images/contact.svg";
function GotQuestions() {
  return (
    <div className="gotcontainer1">
      <div className="gotQuestions">
        <div className="gotColor"></div>
        <p className="gotText">got questions?</p>
        <div className="gotContent">
          <p className="gotIntro">
            Get in touch with a design consultant today. Check our FAQ's, call
            us, send an email or submit an enquiry.
          </p>
        </div>
        <div className="ques-contact">
          <p className="contact-details1">
            <i class="fa fa-phone" aria-hidden="true"></i> +91-xxxxxxxxxx
          </p>
          <p className="contact-details2">
            <i class="fa fa-id-card-o" aria-hidden="true"></i> Submit an enquiry
          </p>
        </div>
      </div>
      <div className="gotsvg">
        <img className="contact-svg" src={svg} alt="svg"></img>
      </div>
    </div>
  );
}

export default GotQuestions;
