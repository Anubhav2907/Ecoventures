import React from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import tg1 from "../images/tg1.jpg";
import tg2 from "../images/tg2.jpg";
import tg3 from "../images/tg3.jpg";
import tg4 from "../images/tg4.jpg";
import tg5 from "../images/tg5.jpg";
import Footer from "./Footer";
import Services from "./Services";
import "./TerraceGarden.css";
function terracescaping() {
  return (
    <div>
      <NavBar></NavBar>
      <NavBar2></NavBar2>
      <div className="terrace-img">
        <img className="terrace-image" src={tg2} alt="terracescapeImg"></img>
      </div>
      <div className="terracescape-text">
        <h2 className="terrace-head">TERRACE GARDEN SERVICES</h2>
        <p className="terrace-subhead">TURN YOUR ROOF TOP INTO A GARDEN!</p>
        <p className="terrace-text">
          We are counted as one of the best landscapers and a prominent name in
          the field of terrace gardening, by leveraging comprehensive experience
          and quality services we develop ecological gardens on top of the
          terrace, with the best team of horticulturists we offer high quality
          design and development work at competitive budget and on time
          completion.
        </p>
        <button className="btn btn-success">Book Site Visit</button>
      </div>
      <div className="terracescape-tg">
        <div className="terracescape-tg-left">
          <h4 className="tg-head">You want to create a better Roof Top,</h4>
          <h4 className="tg-head">We want to help.</h4>
          <p className="tg-text">
            We have helped 100+ customers in creating exotic, hygienic and
            scientifically productive roof top.
          </p>
        </div>
        <div className="terracescape-tg-right">
          <div className="terrace-right-1">
            <p className="terrace-right-head">Incredible Roof Garden</p>
            <p className="terrace-right-text">
              We have amazing landscape concepts to turn your dream of beautiful
              roof-top garden into reality, we understand you wish to have a
              place to sit, relax and reflect, we are completely sure you will
              fall in love with our supreme quality of work.
            </p>
          </div>
        </div>
      </div>
      <div className="landscape-terrace">
        <div className="landscape-terrace-left">
          <div className="terrace1-que">
            What are benefits of terrace garden?
          </div>
          <div className="terrace1">
            Terrace garden is a good investment for several reasons, following
            are its benefits:
          </div>
          <div className="terrace1">
            ✓ Terrace garden turns idle space on rooftop into a beautiful
            landscape.
          </div>
          <div className="terrace1">
            ✓ Terrace garden offers in-house relax, yoga and casual party space.
          </div>
          <div className="terrace1">
            ✓ Terrace garden helps reduce urban heat effect and impact of global
            warming.
          </div>
          <div className="terrace1">
            ✓ Terrace garden can offer regular supply of fresh and organic
            vegetables.
          </div>
        </div>
        <div className="landscape-terrace-right">
          <img className="terrace-villa-img" alt="terrace" src={tg3}></img>
        </div>
      </div>
      <div className="landscape-terrace2">
        <div className="landscape-terrace-right terrace-2">
          <img className="terrace-villa-img" alt="terrace" src={tg4}></img>
        </div>
        <div className="landscape-terrace2-left">
          <span style={{ color: "black" }} className="terrace1-head">
            ENGAGE&nbsp;US&nbsp;TODAY
          </span>
          <p className="terrace-mid-text">
            We are counted as the best service providers and a prominent name in
            the field of roof gardening, with the efficient tools and quality
            services, we help to replicate an ecological garden on the top of
            your roof. With the best team of gardeners you can get the complete
            beautification and designing work of garden.
          </p>
        </div>
      </div>

      <div className="terracescape-text-below">
        <h2 className="terrace-below-head">Our Facilities</h2>
        <p className="terrace-subhead">SOLID TECHNICAL & COMMERCIAL BACKING</p>
        <p className="terrace-text">
          We own largest technology based infrastructure with 5+ acres primary
          farm in Gurgaon which is nurturing more than million plants. There we
          grow, store, neutralize, sanitize and train the plants procured from
          all over the world so that they can develop tissues which help them
          survive in Indian weather conditions. We invite nature lovers to visit
          the plants paradise and hand pick wonders of nature from the most
          diverse collections.
        </p>
      </div>

      <div className="terrace-faq">
        <div className="faq-left">
          <h2 className="terrace-faq-heading">Frequently Asked Questions</h2>
          <div>
            <div>
              <h3 className="terrace-faq-head">
                1. How to start doing gardening at terrace?
              </h3>
              <div>
                <div className="text">
                  <p>
                    It depends on what do you want to achieve, if expectation is
                    to have some plants, furniture or artifacts, you can start
                    getting those from near by stores.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="terrace-faq-head">
                2. How can I get terrace developed as a garden?
              </h3>
              <div>
                <div className="text">
                  <p>
                    If free space at terrace is bigger than 500 square-feet,
                    hire a professional company as that space has tremendous
                    possibilities of getting transformed in to a beautiful place
                    for sitting, yoga, party, or a prolific kitchen garden.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="terrace-faq-head">
                3. What are steps to develop a professional terrace garden?
              </h3>
              <div>
                <div className="text">
                  <p>
                    First step is inspection of the space, second is defining
                    objectives, third is creating a base plan, Fourth is
                    developing drawings and list of materials and Fifth is
                    coordinating & executing the plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-right">
          <div>
            <h3 className="terrace-faq-head">
              4. Do I need water-proofing to develop my terrace as a garden?
            </h3>
            <div>
              <div className="text">
                <p>
                  No, its not required as there are several alternates available
                  in form of portable containers for planting trees and plants.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="terrace-faq-head">
              5. What is terrace garden development cost in India?
            </h3>
            <div>
              <div className="text">
                <p>
                  Terrace garden development cost depends on nature of work and
                  type of resources required.
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

export default terracescaping;
