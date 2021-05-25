import React from 'react'
import Services from "./Services";
import GetATour from "./GetATour";
import Top from "./top";
import Blogs from "./Blogs";
import Instagram from "./instagram";
import GotQuestions from "./GotQuestions";
import Choose from "./Choose";
import Navbar from "./NavBar";
import NavBar2 from "./NavBar2";
import Review from "./Reviews";
import Footer from "./Footer";
import Video from "./Video";

const Home = () => {
    return (
        <div>
        <Navbar></Navbar>
      <NavBar2></NavBar2>
      {/* <Video /> */}
       <Top></Top>
      <GetATour style={{ backgroundColor: "black !important" }}></GetATour>
      <Choose></Choose>
      <Services></Services>
      <Review></Review>
      <Blogs></Blogs>
      <GotQuestions></GotQuestions>
      <Instagram></Instagram>
      <Footer></Footer> 
        </div>
    )
}

export default Home

