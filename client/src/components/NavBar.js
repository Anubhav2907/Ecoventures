import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import useStyles from "./navstyles";
import * as actionType from "../constants/actionTypes";

export default function SearchAppBar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/login");

    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            className={classes.title}
            variant="h6"
            noWrap
          >
            Ecoventures
          </Typography>
          <Button color="primary" variant="contained">
            Login as Pro
          </Button>
          <Button color="" variant="secondary">
            explore
          </Button>
          <Toolbar className={classes.toolbar}>
            {user?.result ? (
              <div className={classes.profile}>
                
                <Button
                  variant="contained"
                  className={classes.logout}
                  color="secondary"
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                component={Link}
                to="/login"
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            )}
          </Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
