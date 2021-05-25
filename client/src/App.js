import React from "react";
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
  );
}

export default App;
