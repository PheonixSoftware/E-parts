// // import React from "react";
// // import { ReactNavbar } from "overlay-navbar";
// //  import logo from "../../../images/logo.png";

// // const options = {
// //   burgerColorHover: "linear-gradient(90deg, rgba(0,0,0,0.5130427170868348) 0%, rgba(0,0,0,0.3113620448179272) 100%);",
// //   logo,
// //   logoWidth: "20vmax",
// //   navColor1: "linear-gradient(90deg, rgba(0,0,0,0.5130427170868348) 0%, rgba(0,0,0,0.3113620448179272) 100%);",
// //   logoHoverSize: "10px",
// //   logoHoverColor: "#eb4034",
// //   link1Text: "Home",
// //   link2Text: "Products",
// //   link3Text: "Contact",
// //   link4Text: "About",
// //   link1Url: "/",
// //   link2Url: "/products",
// //   link3Url: "/contact",
// //   link4Url: "/about",
// //   link1Size: "1.3vmax",
// //   link1Color: "rgba(35, 35, 35,0.8)",
// //   nav1justifyContent: "flex-end",
// //   nav2justifyContent: "flex-end",
// //   nav3justifyContent: "flex-start",
// //   nav4justifyContent: "flex-start",
// //   link1ColorHover: "#eb4034",
// //   link1Margin: "1vmax",
// //   profileIconUrl: "/login",
// //   profileIconColor: "rgba(35, 35, 35,0.8)",
// //   searchIconColor: "rgba(35, 35, 35,0.8)",
// //   cartIconColor: "rgba(35, 35, 35,0.8)",
// //   profileIconColorHover: "#eb4034",
// //   searchIconColorHover: "#eb4034",
// //   cartIconColorHover: "#eb4034",
// //   cartIconMargin: "1vmax",
// // };
 
// // const Header = () => {
// //   return <ReactNavbar{...options}/>;
// // };

// // export default Header;

// import React from 'react';
// import {
//   MDBNavbar,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBContainer,
//   MDBIcon
// } from 'mdb-react-ui-kit';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// export default function Header() {
//   return (
//     <header>
//       <MDBNavbar expand='lg' light bgColor='white' sticky>
//         <MDBContainer fluid>
//           <MDBNavbarToggler
//             aria-controls='navbarExample01'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//           >
//             <MDBIcon fas icon='bars' />
//           </MDBNavbarToggler>
//           <div className='collapse navbar-collapse' id='navbarExample01'>
//             <MDBNavbarNav right className='mb-2 mb-lg-0'>
//               <MDBNavbarItem active>
//                 <MDBNavbarLink aria-current='page' href='#'>
//                   Home
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>About</MDBNavbarLink>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//           </div>
//         </MDBContainer>
//       </MDBNavbar>

     
//     </header>
//   );
// }
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";
import AdbIcon from "@material-ui/icons/TwoWheeler";
import "./Header.css";
import '@fontsource/roboto';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { palette } from '@material-ui/system';
import { BsMailbox2 } from "react-icons/bs";
import UserOptions from "./UserOptions";

const pages = [
  { text: "Home", path: "/" },
  { text: "Products", path: "/products" },
  { text: "About Us", path: "/aboutus" },
  { text: "Contact Us", path: "/contactus" },
];
const settings = [{text:"Log In",path:"/login"}];


function ElevationScroll(props) {
  const { children, window } = props;
  const { fadeIn, fadeOut } = {
    fadeIn: "0.3s ease-in",
    fadeOut: "0.3s ease-out",
  };
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      background: trigger
        ? "linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(10,9,121,1) 31%, rgba(255,0,24,1) 100%)"
        : "#000000",
      transition: trigger ? fadeIn : fadeOut,
    },
  });
}



ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  const navigate = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const {isAuthenticated } = useSelector(
    (state) => state.user
  );
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const showmenu=()=>{
    if(isAuthenticated)
    {
      <Box sx={{ flexGrow: 0 }} id="box2" >
      <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenUserMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
       <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} style={{textAlign:"center"}} onClick={() => navigate.push(setting.path)}>
              {setting.text}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    }
  }
  return (
  
    <React.Fragment>
    
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon style={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Button
              color="transparent"
                variant="h5"
                noWrap
                onClick={() => navigate.push("/")}
                style={{
                  mr: 2,
                 display: { xs: "flex", md: "none" },
                 
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                  fontSize:"20px"
                }}
              >
              
                E-Parts
              </Button>

              <Box bgcolor="transparent" 
              style={{ 
              flexGrow: 1, display: { xs: "none", md: "flex" }
               }}
               >
                {pages.map((page) => (
                  <Button color="#ffffff" style={{color:"white",textShadow:"1px"}} onClick={() => navigate.push(page.path)}>
                    
                      {page.text}
                    
                  </Button>
                ))}
              </Box>
                 
                  <Box sx={{ flexGrow: 0 }} id="box2"  >
              <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
               <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} style={{textAlign:"center"}} onClick={() => navigate.push(setting.path)}>
                      {setting.text}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
           
              </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
      <Container></Container>
      <ScrollTop {...props}>
        <Fab
          style={{
            background: "rgb(2, 0, 36)",
            "background-image":
              "linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(10,9,121,1) 31%, rgba(255,0,24,1) 100%)",
            color: "#ffffff",
          }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>

  );
}
