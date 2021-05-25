import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

import useStyles from "./navstyles";

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography component={Link} to="/" className={classes.title} variant="h6" noWrap>
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
