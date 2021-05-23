//import { faHome, faAddressCard } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button ,TextField} from "@material-ui/core";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <h6>Main Menu</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Terrace Gardens</a>
              </li>
              <li>
                <a href="#">Lawns & Backyard</a>
              </li>
              <li>
                <a href="#">How it Works??</a>
              </li>
              <li>
                <a href="http">Contact Us</a>
              </li>
              
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="#">search</a>
              </li>
              <li>
                <a href="#">
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">EPR Compliance</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h4 style={{color: 'white'}}>Be in the know</h4>
            <ul className="footer-links">
              <li><TextField id="standard-basic" label="Email" variant="filled" style={{width : 200 , backgroundColor:'white'}}/></li>
              <li><Button variant="contained" style={{color : 'white',backgroundColor : '#29bb89',marginTop : '20px',width : 200} } fullwidth >
  Submit
</Button></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5>Reach Us</h5>
            <ul className="footer-links">
              <li>
                <h6>Corp Office :</h6><p style ={{fontWeight:'bold'}}>
                  2567,Terrace Floor,D2, Vasant Kunj ,New Delhi 
                </p>
              </li>
              <li>
              <h6>Regd Office :</h6><p style ={{fontWeight:'bold'}}>
                  2567,Terrace Floor,D2, Vasant Kunj ,New Delhi 
                </p>
              </li>
              <li>
                <h6>Email :</h6><b>1234@gmail.com</b>
              </li>
              <li>
              <h6>Phone :</h6><b>42342342</b>
              </li>
         
            </ul>
          </div>
        </div>
        
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright 2017 All Rights Reserved by 
              <a href="#"> Ecovenders</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">dsf</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
