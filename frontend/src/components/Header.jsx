import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState(0);
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 2%, rgba(9,9,121,1) 22%, rgba(46,165,222,1) 62%, rgba(0,212,255,1) 88%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BLOG WEBSITE</Typography>
        {isLoggedIn && (
          <Box display={"flex"} margin={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab label="All Blogs" LinkComponent={Link} to="/blogs" />
              <Tab label="My Blogs" LinkComponent={Link} to="/myBlogs" />
            </Tabs>
          </Box>
        )}
        <Box display={"flex"} marginLeft={"auto"}>
          {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                color="warning"
                sx={{ margin: 1, borderRadius: 10 }}
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                color="warning"
                sx={{ margin: 1, borderRadius: 10 }}
              >
                SignUp
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              color="warning"
              sx={{ margin: 1, borderRadius: 10 }}
            >
              LogOut
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
