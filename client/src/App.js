import React from "react";
<<<<<<< HEAD
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Landscaping from "./components/Landscaping";
import GreenVilla from "./components/GreenVilla";
import AirPurifier from "./components/AirPurifier";
import GreenRoof from "./components/GreenRoof";
import KitchenGarden from "./components/KitchenGarden";
import VerticalGarden from "./components/VerticalGarden";
import TerraceGarden from "./components/TerraceGarden";
function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/TerraceGarden" exact component={TerraceGarden}></Route>
          <Route path="/Landscaping" exact component={Landscaping}></Route>
          <Route path="/GreenVilla" exact component={GreenVilla}></Route>
          <Route path="/AirPurifier" exact component={AirPurifier}></Route>
          <Route path="/GreenRoof" exact component={GreenRoof}></Route>
          <Route path="/KitchenGarden" exact component={KitchenGarden}></Route>
          <Route
            path="/VerticalGarden"
            exact
            component={VerticalGarden}
          ></Route>
        </Switch>
      </Container>
    </BrowserRouter>
=======
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
import GreenRoof from "./components/GreenRoof";
import AirPurifier from "./components/AirPurifier";
import VerticalGarden from "./components/VerticalGarden";
import KitchenGarden from "./components/KitchenGarden";
function App() {
  return (
    <div>
      <KitchenGarden></KitchenGarden>
    </div>
>>>>>>> master
  );
}

export default App;
