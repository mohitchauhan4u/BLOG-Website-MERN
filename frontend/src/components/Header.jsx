import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 2%, rgba(9,9,121,1) 22%, rgba(46,165,222,1) 62%, rgba(0,212,255,1) 88%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BLOG WEBSITE</Typography>
        <Box display={"flex"} marginLeft={"auto"}>
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: 1, borderRadius: 10 }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: 1, borderRadius: 10 }}
          >
            SignUp
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
