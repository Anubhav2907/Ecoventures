import React from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import kg1 from "../images/kg1.jpg";
import kg2 from "../images/kg2.jpeg";
import kg3 from "../images/kg3.jpg";
import kg4 from "../images/kg4.jpg";

import Footer from "./Footer";
import Services from "./Services";
import "./KitchenGarden.css";
function Landscaping() {
  return (
    <div>
      <NavBar></NavBar>
      <NavBar2></NavBar2>
      <div className="land-img">
        <img className="land-image" src={kg4} alt="landscapeImg"></img>
      </div>
      <div className="vertical-landscape-text">
        <h2 className="land-head">KITCHEN GARDEN SERVICES</h2>
        <p className="land-text">
          We have been working to present a kitchen garden solution that our
          customers look for, convenient and professional kitchen garden that
          turns to be productive, weather that is 5 acres farm or 200
          square-feet balcony, we work with our customers to overcome most of
          the hurdles. We are appreciated for offering high quality services,
          our team of experts makes sure that the best options are selected and
          executed exceedingly well
        </p>
        <b style={{ marginTop: "10px" }}>
          We develop high-tech and organic gardens from a minimum budget of Rs
          1,00,000.
        </b>
        <button className="btn btn-success">Book Site Visit</button>
      </div>
      <div className="landscape-vertical">
        <div className="landscape-vertical-left">
          <div className="vertical1">
            <div className="vertical-6" style={{ textAlign: "center" }}>
              <h3 className="vertical-6-head">AUTOMATION</h3>
              <p>
                Maintaining the vertical roof has never been convenient like it
              </p>
            </div>
            <div className="vertical-6" style={{ textAlign: "center" }}>
              <h3 className="vertical-6-head">IOT (INTERNET OF THINGS)</h3>
              <p>Control the vertical roof irrigation system by your phone.</p>
            </div>
          </div>
          <div className="vertical1">
            <div className="vertical-6" style={{ textAlign: "center" }}>
              <h3 className="vertical-6-head">ARTIFICIAL INTELLIGENCE</h3>
              <p>AI enabled garden seldom lets you intervene.</p>
            </div>
            <div className="vertical-6" style={{ textAlign: "center" }}>
              <h3 className="vertical-6-head">FREE MAINTENANCE</h3>
              <p>We offer 90 days free maintenance.</p>
            </div>
          </div>
          <div className="vertical1">
            <div className="vertical-6" style={{ textAlign: "center" }}>
              <h3 className="vertical-6-head">AIR PURIFIER PLANTS</h3>
              <p>
                We use NASA recommended and low maintainance air purifier plants
              </p>
            </div>
            <div className="vertical-6" style={{ textAlign: "center" }}>
              <h3 className="vertical-6-head">100% HYGIENIC</h3>
              <p>We use 100% pest and disease free plants.</p>
            </div>
          </div>
        </div>
        <div className="landscape-vertical-right">
          <img className="vertical-villa-img" alt="vertical" src={kg2}></img>
        </div>
      </div>
      <div className="landscape-vertical2">
        <div className="landscape-vertical-right vertical-2">
          <img className="vertical-villa-img" alt="vertical" src={kg3}></img>
        </div>
        <div className="landscape-vertical2-left">
          <span style={{ color: "green" }} className="vertical1-head">
            GARDEN
          </span>
          <span style={{ color: "black" }} className="vertical1-head">
            &nbsp;THAT&nbsp;WORKS
          </span>
          <p className="vertical-mid-text">
            BE IT OFFICE OR RESIDENCE, VERTICAL WALL CAN BE INSTALLED ANY WHERE,
            WE CREATE HYGIENIC AND AUTOMATED vertical WALLS WITH SUPERIOR BLEND
            OF NATURE & TECHNOLOGY!
          </p>
        </div>
      </div>

      <div className="landscape-vertical">
        <div className="vertical-3-div-left">
          <h1>136</h1>
          <h4>PROJECTS COMPLETED</h4>
          <p>
            We are favorites because of our strength to understand customer’s
            needs & presenting time bound customized solutions.
          </p>
        </div>
        <div className="landscape-vertical-right">
          <img className="vertical-villa-img" alt="vertical" src={kg1}></img>
        </div>
        <div className="vertical-3-div-right">
          <h1>21</h1>
          <h4>PROJECTS ONGOING</h4>
          <p>
            We have successfully completed 100+ kitchen gardens development,
            while 8 are being worked on.
          </p>
        </div>
      </div>
      <div className="vertical-landscape-text-below">
        <h2 className="land-below-head">Our Facilities</h2>
        <p className="land-subhead">SOLID TECHNICAL & COMMERCIAL BACKING</p>
        <p className="land-text">
          We own largest technology based infrastructure with 5+ acres primary
          farm in Gurgaon which is nurturing more than million plants. There we
          grow, store, neutralize, sanitize and train the plants procured from
          all over the world so that they can develop tissues which help them
          survive in Indian weather conditions. We invite nature lovers to visit
          the plants paradise and hand pick wonders of nature from the most
          diverse collections.
        </p>
        <button className="btn btn-success">Book Site Visit</button>
      </div>
      <div className="landscape-go">
        <div className="landscape-go-left" style={{paddingRight:"4em"}}>
          <h4 className="go-head">HOW WE HAVE BEEN DOING</h4>
          <p className="go-text">
            We are one of the prominent kitchen garden developers, with sound
            technical and commercial background.
          </p>
        </div>
        <div className="landscape-go-right">
          <div className="land-right-1">
            <p className="land-right-head">Supreme Quality</p>
            <p className="land-right-text">
              We deliver supreme quality, this has been a legacy and foundation
              of our success, we never compromise for quality in what ever we
              do!
            </p>
          </div>
          <div className="land-right-1">
            <p className="land-right-head">Easy Process</p>
            <p className="land-right-text">
              We are a process oriented organization, we always strive to follow
              established benchmarks and making them easy for our customers to
              maximize the convenience.
            </p>
          </div>
          <div className="land-right-1">
            <p className="land-right-head">Wide Collection</p>
            <p className="land-right-text">
              We have wide collection of pots and plants to choose from, where
              its required we are always flexible to procure either from
              domestic or international markets.
            </p>
          </div>
        </div>
      </div>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default Landscaping;
