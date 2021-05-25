import React from "react";
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
        <Button>How it works?</Button>
        <Button style={{ fontWeight: "bold" }}>book mali</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar2;