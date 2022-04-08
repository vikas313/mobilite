import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <AppBar position="static"  className="head" >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography  style={{fontWeight:'700'}} variant="h6" component="div" sx={{ flexGrow: 0 }}>
          Fungy
        </Typography>

        {/* <Button color="inherit">Login</Button> */}
        <Typography
          className="apbar"
          variant="h6"
          component="div"
          sx={{ flexGrow: 0.1 }}
        >
          <pre>
            <i class="uil uil-search">
              
            </i> <input
            type="text"
            placeholder="Search by creator"
            className="inputappbar"
          ></input>
          </pre>
         
        </Typography>
        <Typography variant="buttontext" component="div" sx={{ flexGrow: 0.1 }}>
          My Items
        </Typography>
        <Typography variant="buttontext" component="div" sx={{ flexGrow: 0.1 }}>
          Following
        </Typography>
        <Typography variant="buttontext" component="div" sx={{ flexGrow: 0.1 }}>
          Activity
        </Typography>
        <Typography variant="buttontext" component="div" sx={{ flexGrow: 0.1 }}>
          How it works
        </Typography>
        <Typography variant="buttontext" component="div" sx={{ flexGrow: 0.1 }}>
          Community
        </Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 0.2 }}>
          <i class="uil uil-bell"></i>
        </Typography>
        <Button variant="contained"  className="token" >
          0 TOKEN
        </Button>
        <Typography variant="h5" component="div" sx={{ flexGrow: 0.1 }}>
          <i class="uil uil-user-circle"></i>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
