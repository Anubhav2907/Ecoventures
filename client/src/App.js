import React from "react";
import Services from "./components/Services";
import GetATour from "./components/GetATour";
import Top from "./components/top";
import Blogs from "./components/Blogs";
import Instagram from "./components/instagram";
import GotQuestions from "./components/GotQuestions";
import Choose from "./components/Choose";

function App() {
  return (
    <div>
      <Top></Top>
      <GetATour style={{backgroundColor:"black !important"}}></GetATour>
      <Choose></Choose>
      <Services></Services>
      <Blogs></Blogs>
      <GotQuestions></GotQuestions>
      <Instagram></Instagram>
    </div>
  );
}

export default App;
