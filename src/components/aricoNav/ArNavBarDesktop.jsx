import { AppBar, Box, Link } from "@mui/material";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import LogoImg from "../../assets/ARICO-B2B-EPS.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ArNavBarDesktop = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "white", padding: 0 }}>
        <Container
          className="!p-0"
          sx={{
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // height: "50px",
          }}
          maxWidth="100%"
        >
          {/* left side */}
          <Toolbar
            className="!p-0"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              color: "black",
              flexGrow: 2,
            }}
          >
            <Box
              // className={"border-solid border-r-8 border-transparent"}
              sx={{
                // borderLeft: '25px solid transparent',
                // height: 0,
                // width: '125px',
                // borderRight: "25px solid black",
                // backgroundColor: "#ffc602",
                borderTop: "30px solid #ffc602",
                borderRight: "20px solid transparent",
                paddingLeft: "6rem",
                height: "30px",
                width: "100%",
                display: "flex",
                alignItems: "end",
                gap: "2rem",
              }}
            >
              <Link
                href="#"
                sx={{ textDecoration: "none", color: "black", padding: "5px" }}
              >
                About Us
              </Link>
              <Link
                href="#contact"
                sx={{ textDecoration: "none", color: "black", padding: "5px" }}
              >
                Contact
              </Link>
            </Box>
            <Box
              sx={{
                paddingLeft: "6rem",
                height: "53px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <Link
                sx={{ textDecoration: "none", color: "black" }}
                href="#prelunch"
              >
                Prelunch
              </Link>
              <Link
                sx={{ textDecoration: "none", color: "black" }}
                href="#pricing"
              >
                Pricing
              </Link>
              <Link sx={{ textDecoration: "none", color: "black" }} href="#fqa">
                FAQ
              </Link>
            </Box>
          </Toolbar>

          {/* logo image */}
          <Toolbar
            className="!p-0"
            sx={{
              display: "flex",
              // flexDirection:'column',
              justifyContent: "center",
              color: "black",
              flexGrow: 1,
            }}
          >
            {/* LogoImg desktop*/}
            <Link
              href="#"
              sx={{
                // mr: 2,
                display: "flex",
                flexDirection: "column",
                display: { xs: "none", md: "flex" },
                width: "200px",
                // height: "fit",
              }}
            >
              <img src={LogoImg} width={"100%"} />
            </Link>
          </Toolbar>

          {/* right side */}
          <Toolbar
            className="!p-0"
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              color: "black",
              flexGrow: 2,
            }}
          >
            <Box
              sx={{
                borderTop: "30px solid #333",
                borderLeft: "20px solid transparent",
                paddingRight: "6rem",
                height: "30px",
                width: "100%",
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
                gap: "2rem",
                // marginTop:'-1rem'
              }}
            >
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  padding: "5px",
                  ":hover": {
                    background: "#ffffff14",
                  },
                }}
              >
                Registration
              </Link>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "#9e9e9e",
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  padding: "5px",
                  ":hover": {
                    color: "#fff",
                    background: "#ffffff14",
                  },
                }}
              >
                <span>Language</span>
                <span className="text-white">EN</span>
                <MdOutlineKeyboardArrowDown />
              </Link>
            </Box>
            <Box
              sx={{
                paddingRight: "6rem",
                height: "53px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "2rem",
              }}
            >
              <Link
                href="#manufacturers"
                sx={{ textDecoration: "none", color: "black" }}
              >
                Manufacturers
              </Link>
              <Link
                href="#service-provider"
                sx={{ textDecoration: "none", color: "black" }}
              >
                Service Provider
              </Link>
              <Link
                href="#distributor"
                sx={{ textDecoration: "none", color: "black" }}
              >
                Distributor
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="w-full flex justify-center">
        <div
          style={{
            width: "15%",
            height: "20px",
            borderTop: " 20px solid #fff",
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            // boxShadow: "1px 1px 7px 1px #9c9c9c",
          }}
        ></div>
      </div>
    </>
  );
};

export default ArNavBarDesktop;
