import React from "react";
<<<<<<< HEAD
import { AppBar, Toolbar, Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavBar2 = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Button component={Link} to="/TerraceGarden">Terrace gardans</Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Lawns & Backyard
        </Button>
        <Menu
          id="menu-list-grow"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/Landscaping" onClick={handleClose}>
            Landscaping
          </MenuItem>
          <MenuItem component={Link} to="/GreenVilla" onClick={handleClose}>
            Green Villa
          </MenuItem>
          <MenuItem component={Link} to="/GreenRoof" onClick={handleClose}>
            Green Roof
          </MenuItem>
          <MenuItem component={Link} to="/AirPurifier" onClick={handleClose}>
            Air Purifier
          </MenuItem>
          <MenuItem component={Link} to="/VerticalGarden" onClick={handleClose}>
            Vertical Garden
          </MenuItem>
          <MenuItem component={Link} to="/KitchenGarden" onClick={handleClose}>
            Kitchen Garden
          </MenuItem>
        </Menu>
=======
import { AppBar, Toolbar, Typography, Button ,Menu,MenuItem} from "@material-ui/core";

const NavBar2 = () => 
{
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Button>Terrace gardans</Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Lawns & Backyard
      </Button>
      <Menu
        id="menu-list-grow"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Landscaping</MenuItem>
        <MenuItem onClick={handleClose}>Green Villa</MenuItem>
        <MenuItem onClick={handleClose}>Green Roof</MenuItem>
        <MenuItem onClick={handleClose}>Air Purifier</MenuItem>
        <MenuItem onClick={handleClose}>Vertical Garden</MenuItem>
        <MenuItem onClick={handleClose}>Plant Scaping</MenuItem>
        <MenuItem onClick={handleClose}>Kitchen Garden</MenuItem>
      </Menu>
>>>>>>> master
        <Button>How it works?</Button>
        <Button style={{ fontWeight: "bold" }}>book mali</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar2;
