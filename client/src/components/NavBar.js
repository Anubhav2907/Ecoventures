import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Button,
    Popover,
    Box
  } from "@material-ui/core";
  import SearchIcon from "@material-ui/icons/Search";
  import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
  
  import useStyles from "./navstyles";
  
  export default function SearchAppBar() {
    const classes = useStyles();
   
    return (
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Ecoventures
            </Typography>
            <Button color="primary" variant="contained">
              Login as Pro
            </Button>
            <Button color="" variant="secondary">
              explore
            </Button>
            <Button color="" variant="secondary">
              Login
            </Button>
            <Button color="" variant="secondary">
              Signup
            </Button>
            <div className={classes.search}>
            <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" style={{color:'black',backgroundColor:'white'}} {...bindTrigger(popupState)}>
            <SearchIcon />
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={5}>
            <Typography >Service</Typography>
            <InputBase
              placeholder="Service"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <Typography>Location</Typography>
                    <InputBase
              placeholder="Location"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <Button style={{color:'white',backgroundColor:'red'}} >Find</Button>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
      </div>          
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  