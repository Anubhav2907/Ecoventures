import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const NavBar2 = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Button>Terrace gardans</Button>
        <Button>Lawns & Backyard</Button>
        <Button>How it works?</Button>
        <Button style={{ fontWeight: "bold" }}>book mali</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar2;