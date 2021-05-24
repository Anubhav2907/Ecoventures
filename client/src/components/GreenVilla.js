import React from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import Green1 from "../images/green1.jpg";
import gv1 from "../images/gv1.jpg";
import gv2 from "../images/gv2.jpg";
import gv3 from "../images/gv3.jpg";
import Footer from "./Footer";
import Services from "./Services";
import "./GreenVilla.css";
function Landscaping() {
  return (
    <div>
      <NavBar></NavBar>
      <NavBar2></NavBar2>
      <div className="land-img">
        <img className="land-image" src={Green1} alt="landscapeImg"></img>
      </div>
      <div className="green-landscape-text">
        <h2 className="land-head">GREEN VILLA</h2>
        <p className="land-text">
          Several studies reveal, modern sealed buildings are 10 – 15 times more
          polluted than the outdoors, there are various chemical agents present
          in and around living areas, modern construction techniques, use of
          synthetic materials, poor ventilation, electronics, flooring etc emit
          life threatening gases, a long exposure leads to catastrophic
          diseases. Green villa is the best way to neutralize air pollution,
          wisely chosen air purifier plants create exotic paradise in and around
          the house.
        </p>
        <b style={{ marginTop: "10px" }}>
          Green villa projects starts from a minimum budget of Rs. 295,000.
        </b>
        <button className="btn btn-success">Book Site Visit</button>
      </div>
      <div className="landscape-green">
        <div className="landscape-green-left">
          <div className="green1">
            <div className="green-6" style={{ textAlign: "center" }}>
              <h3 className="green-6-head">AUTOMATION</h3>
              <p>Maintenance was never such convenient.</p>
            </div>
            <div className="green-6" style={{ textAlign: "center" }}>
              <h3 className="green-6-head">IOT (INTERNET OF THINGS)</h3>
              <p>Control the irrigation system by your phone.</p>
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
              <h3 className="green-6-head">AIR PURIFIER PLANTS</h3>
              <p>We use low maintenance, air purifier plants.</p>
            </div>

            <div className="green-6" style={{ textAlign: "center" }}>
              <h3 className="green-6-head">FREE MAINTENANCE</h3>
              <p>We offer 90 days free maintenance.</p>
            </div>
          </div>
        </div>
        <div className="landscape-green-right">
          <img className="green-villa-img" alt="green" src={gv1}></img>
        </div>
      </div>
      <div className="landscape-green2">
        <div className="landscape-green-right green-2">
          <img className="green-villa-img" alt="green" src={gv2}></img>
        </div>
        <div className="landscape-green2-left">
          <span style={{ color: "black" }} className="green1-head">
            BRING
          </span>
          <span style={{ color: "green" }} className="green1-head">
            &nbsp;NATURE
          </span>
          <span style={{ color: "black" }} className="green1-head">
            &nbsp;HOME
          </span>
          <p className="green-mid-text">
            BE IT OFFICE OR RESIDENCE, GREENS CAN BE INSTALLED ANY WHERE, WE
            CREATE HYGIENIC AND AUTOMATED GARDENS WITH SUPERIOR BLEND OF NATURE
            & TECHNOLOGY!
          </p>
        </div>
      </div>

      <div className="landscape-green">
        <div className="green-3-div-left">
          <h1>64</h1>
          <h4>GARDENS EXECUTED</h4>
          <p>
            We are favorites because of understanding customer needs &
            presenting solutions.
          </p>
        </div>
        <div className="landscape-green-right">
          <img className="green-villa-img" alt="green" src={gv3}></img>
        </div>
        <div className="green-3-div-right">
          <h1>54382</h1>
          <h4>PLANTS INSTALLED</h4>
          <p>
            We have installed more than 54382+ live plants at customer premises
            and maintaining them.
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
