import React from "react";
import "./GetATour.css";
function GetATour() {
  return (
    <div className="outer">
      <div className="getATour">
        <div className="colorLine"></div>
        <p className="gettext">get a tour</p>
        <div className="getcontent">
          <p className="intro">Checkout how we transform outdoor spaces</p>
          <p className="intro">for our customers</p>
        </div>
      </div>
      <div className="border">
        <main className="page-content">
          <div className="getCard">
            <div className="content">
              <h2 className="title">Front Lawn</h2>
              <p>New Delhi</p>
              <button className="btn1">View</button>
            </div>
          </div>
          <div className="getCard">
            <div className="content">
              <h2 className="title">Terrace Garden</h2>
              <p>New Delhi</p>
              <button className="btn1">View</button>
            </div>
          </div>
          <div className="getCard">
            <div className="content">
              <h2 className="title">Backyard</h2>
              <p>Panipat</p>
              <button className="btn1">View</button>
            </div>
          </div>
          <div className="getCard">
            <div className="content">
              <h2 className="title">Terrace Garden</h2>
              <p>New Delhi</p>
              <button className="btn1">View</button>
            </div>
          </div>
          <div className="getCard">
            <div className="content">
              <h2 className="title">Backyard</h2>
              <p>Gurgaon</p>
              <button className="btn1">View</button>
            </div>
          </div>
          <div className="getCard">
            <div className="content">
              <h2 className="title">Terrace Garden</h2>
              <p>New Delhi</p>
              <button className="btn1">View</button>
            </div>
          </div>
          <div className="getCard">
            <div className="content">
              <h2 className="title">Balcony Garden</h2>
              <p>Gurgaon</p>
              <button className="btn1">View</button>
            </div>
          </div>
          <div className="getCard">
            <div className="content">
              <h2 className="title">Lawn</h2>
              <p>Noida</p>
              <button className="btn1">View</button>
            </div>
          </div>
          <button className="btn btn-success">
            See all Projects and Designs
          </button>
        </main>
      </div>
    </div>
  );
}

export default GetATour;
