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
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <NavBar2></NavBar2>
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
  );
}

export default App;
