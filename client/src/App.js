import React from "react";
import Services from "./components/Services";
import GetATour from "./components/GetATour";
import Top from "./components/top";
import Blogs from "./components/Blogs";
import Instagram from "./components/instagram";
import GotQuestions from "./components/GotQuestions";
import Choose from "./components/Choose";
import Navbar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import Review from "./components/Reviews";
import Footer from "./components/Footer";
import Landscaping from "./components/Landscaping";
import GreenVilla from "./components/GreenVilla";
import Video from "./components/Video";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <NavBar2></NavBar2>
      <Video />
       <Top></Top>
      <GetATour style={{ backgroundColor: "black !important" }}></GetATour>
      <Choose></Choose>
      <Services></Services>
      <Review></Review>
      <Blogs></Blogs>
      <GotQuestions></GotQuestions>
      <Instagram></Instagram>
      <Footer></Footer>
      <Landscaping></Landscaping>
      <GreenVilla></GreenVilla>
    </div>
  );
}

export default App;
