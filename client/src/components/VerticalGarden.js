import React from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import vg1 from "../images/vg1.jpg";
import vg2 from "../images/vg2.jpg";
import vg3 from "../images/vg3.jpg";
import vg4 from "../images/vg4.jpg";

import Footer from "./Footer";
import Services from "./Services";
import "./VerticalGarden.css";
function Landscaping() {
  return (
    <div>
      <NavBar></NavBar>
      <NavBar2></NavBar2>
      <div className="land-img">
        <img className="land-image" src={vg2} alt="landscapeImg"></img>
      </div>
      <div className="vertical-landscape-text">
        <h2 className="land-head">VERTICAL GARDEN GREEN WALL</h2>
        <p className="land-text">
          If you are searching for easy way to breathe fresh oxygen, grow
          plants, give aesthetic look to the property or live in an exotic
          environment, vertical gardening is the way for you, we create green
          walls that work for several years with minimum human interference.
        </p>
        <b style={{ marginTop: "10px" }}>
          Vertical gardens start from a minimum budget of Rs. 99,000 or 100 sqft
          area.
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
          <img className="vertical-villa-img" alt="vertical" src={vg1}></img>
        </div>
      </div>
      <div className="landscape-vertical2">
        <div className="landscape-vertical-right vertical-2">
          <img className="vertical-villa-img" alt="vertical" src={vg4}></img>
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
          <h1>259</h1>
          <h4>GARDENS EXECUTED</h4>
          <p>
            We are favorites because of our strength to understand customer’s
            needs & presenting time bound customized solutions.
          </p>
        </div>
        <div className="landscape-vertical-right">
          <img className="vertical-villa-img" alt="vertical" src={vg3}></img>
        </div>
        <div className="vertical-3-div-right">
          <h1>450000</h1>
          <h4>PLANTS INSTALLED</h4>
          <p>
            We have installed more than 450000+ live plants in 238 + vertical
            walls at customer premises and maintaining them.
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
      <div className="land-faq">
        <div className="vg-left">
          <h2 className="land-faq-heading">Frequently Asked Questions</h2>
          <div>
            <div>
              <h3 className="land-faq-head">1. What is vertical garden?</h3>
              <div>
                <div className="text">
                  <p>
                    Vertical garden is a term used for upright or bottom to top
                    plantation.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="land-faq-head">
                2. What is difference between vertical garden and green wall?
              </h3>
              <div>
                <div className="text">
                  <p>
                    There is no difference between vertical garden and green
                    wall, if we get specific to words, vertical garden is a
                    garden created bottom to top, while green wall is a garden
                    vertically created over a wall.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="land-faq-head">
                3. How long bio wall and vertical garden can last?
              </h3>
              <div>
                <div className="text">
                  <p>
                    Life of bio-wall based on fabric is 3-5 years, while PP
                    walls last 8-10 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vg-right">
          <div>
            <h3 className="land-faq-head">
              4. What is the best way to get vertical garden developed?
            </h3>
            <div>
              <div className="text">
                <p>
                  There are several DIY methods to create small vertical
                  gardens, for scalable solution it is recommended to hire
                  professionals.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="land-faq-head">
              5. What are the types of vertical garden?
            </h3>
            <div>
              <div className="text">
                <p>
                  Based on placement location, there are two types of vertical
                  garden - indoor vertical garden and outdoor vertical garden.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="land-faq-head">
              6. What is approximate cost of vertical garden in India?
            </h3>
            <div>
              <div className="text">
                <p>
                  Cost of vertical garden depends on several factors, it ranges
                  between Rs. 350-1250 /sq-ft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default Landscaping;
