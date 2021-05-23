import React from "react";
import "./Choose.css";
function Choose() {
  return (
    <div className="choose">
      <div className="top-text">
        <h3>Why people are choosing us</h3>
      </div>
      <div className="top-container">
        <div className="icon_container">
          <div>
            <i
              class="fa fa-check-circle"
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
          </div>
          <div>
            <p className="choose-heading">Ecoventure Guarantee</p>
            <p className="choose-text">
              Get a reservice if you found the rendered service unsatisfactory.
            </p>
          </div>
        </div>
        <div className="icon_container">
          <div>
            <i
              class="fa fa-umbrella"
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
          </div>
          <div>
            <p className="choose-heading">Ecoventure Guarantee</p>
            <p>
              Get a reservice if you found the rendered service unsatisfactory.
            </p>
          </div>
        </div>
        <div className="icon_container">
          <div>
            <i
              class="fa fa-id-badge"
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
          </div>
          <div>
            <p className="choose-heading">Ecoventure Guarantee</p>
            <p>
              Get a reservice if you found the rendered service unsatisfactory.
            </p>
          </div>
        </div>
      </div>
      <div className="second-container">
        <div className="icon_container">
          <div>
            <i
              class="fa fa-credit-card-alt"
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
          </div>
          <div>
            <p className="choose-heading">Ecoventure Guarantee</p>
            <p>
              Get a reservice if you found the rendered service unsatisfactory.
            </p>
          </div>
        </div>
        <div className="icon_container">
          <div>
            <i
              class="fa fa-phone-square"
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
          </div>
          <div>
            <p className="choose-heading">Ecoventure Guarantee</p>
            <p>
              Get a reservice if you found the rendered service unsatisfactory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
