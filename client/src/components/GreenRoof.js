import React from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import gf1 from "../images/gf1.jpg";
import gf2 from "../images/gf2.jpeg";
import gf3 from "../images/gf3.jpg";
import gf4 from "../images/gf4.jpg";
import gf5 from "../images/gf5.jpg";

import Footer from "./Footer";
import Services from "./Services";
import "./GreenVilla.css";
function Landscaping() {
  return (
    <div>
      <NavBar></NavBar>
      <NavBar2></NavBar2>
      <div className="land-img">
        <img className="land-image" src={gf5} alt="landscapeImg"></img>
      </div>
      <div className="green-landscape-text">
        <h2 className="land-head">GREEN ROOF</h2>
        <p className="land-text">
          We design and implement incredible green roofs that appeal to
          visitors, homeowners and businesses. Green roof lasts longer than
          conventional roofs, reduces energy cost, offers peaceful retreats. It
          helps environment, improves air quality, contributes to reduce urban
          heat island effect as well as supplements traditional vegetation
          without disrupting infrastructure as it utilizes neglected space and
          makes it useful. Green roof is the way to utilize every bit of space,
          a well planned roof top can offer a lot to the owners as well as to
          environment.
        </p>
        <b style={{ marginTop: "10px" }}>
          Green roof projects start from a minimum budget of Rs. 149,000.{" "}
        </b>
        <button className="btn btn-success">Book Site Visit</button>
      </div>
      <div className="landscape-green">
        <div className="landscape-green-left">
          <div className="green1">
            <div className="green-6" style={{ textAlign: "center" }}>
              <h3 className="green-6-head">AUTOMATION</h3>
              <p>
                Maintaining the green roof has never been convenient like it
              </p>
            </div>
            <div className="green-6" style={{ textAlign: "center" }}>
              <h3 className="green-6-head">IOT (INTERNET OF THINGS)</h3>
              <p>Control the green roof irrigation system by your phone.</p>
            </div>
          </div>
          <div className="green1">
            <div className="green-6" style={{ textAlign: "center" }}>
              <h3 className="green-6-head">ARTIFICIAL INTELLIGENCE</h3>
              <p>AI enabled garden seldom lets you intervene.</p>
            </div>
            <div className="green-6" style={{ textAlign: "center" }}>
              <h3 className="green-6-head">100% HYGIENIC</h3>
              <p>We use 100% pest and disease free plants.</p>
            </div>
          </div>
          <div className="green1">
            <div className="green-6" style={{ textAlign: "center" }}>
              <h3 className="green-6-head">EXOTIC PLANTS</h3>
              <p>We use exotic, hardy and low maintainance plants</p>
            </div>

            <div className="green-6" style={{ textAlign: "center" }}>
              <h3 className="green-6-head">FREE MAINTENANCE</h3>
              <p>We offer 90 days free maintenance.</p>
            </div>
          </div>
        </div>
        <div className="landscape-green-right">
          <img className="green-villa-img" alt="green" src={gf1}></img>
        </div>
      </div>
      <div className="landscape-green2">
        <div className="landscape-green-right green-2">
          <img className="green-villa-img" alt="green" src={gf2}></img>
        </div>
        <div className="landscape-green2-left">
          <span style={{ color: "green" }} className="green1-head">
            LIVING
          </span>
          <span style={{ color: "black" }} className="green1-head">
            &nbsp;REDEFINED
          </span>
          <p className="green-mid-text">
            BE IT RESIDENTIAL OR COMMERCIAL PROPERTY, GREEN ROOF OFFERS EXOTIC
            SPACE FOR CREATING PEACEFUL RETREATS, PARTIES, YOGA OR VEGETATION,
            WE CREATE IMPACTFUL GREEN ROOFS WITH SUPERIOR BLEND OF NATURE &
            TECHNOLOGY!
          </p>
        </div>
      </div>

      <div className="landscape-green">
        <div className="green-3-div-left">
          <h1>85</h1>
          <h4>GARDENS EXECUTED</h4>
          <p>
            We are favorites because of our strength to understand customer
            needs & presenting time bound customized solutions.
          </p>
        </div>
        <div className="landscape-green-right">
          <img className="green-villa-img" alt="green" src={gf3}></img>
        </div>
        <div className="green-3-div-right">
          <h1>63000</h1>
          <h4>PLANTS INSTALLED</h4>
          <p>
            We have installed more than 63,000+ live plants in 85 + green roofs
            at customer premises and maintaining them with unmatched quality.
          </p>
        </div>
      </div>
      <div className="green-landscape-text-below">
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
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default Landscaping;
