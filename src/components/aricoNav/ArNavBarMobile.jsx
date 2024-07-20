/* eslint-disable no-unused-vars */
import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { GoPerson } from "react-icons/go";
import { HiMenuAlt2 } from "react-icons/hi";
import LogoImg from "../../assets/ARICO-B2B-EPS.svg";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ArNavBar = () => {
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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
        }}
        maxWidth="540px"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "black",
          }}
        >
          {/* LogoImg desktop*/}
          <Link
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              width: "100px",
              height: "fit",
            }}
          >
            <img src={LogoImg} width={"100%"} />
          </Link>

          {/* LogoImg mobile*/}
          <Link
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              width: "100px",
              height: "fit",
            }}
          >
            <img src={LogoImg} width={"100%"} />
          </Link>

          <Box sx={{ display: "flex" }}>
            {/* user icon desktop */}
            <Tooltip title="Open settings">
              <IconButton
                sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
              >
                <GoPerson />
              </IconButton>
            </Tooltip>
            {/* hamberger menu desktop */}
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <HiMenuAlt2 />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ArNavBar;
