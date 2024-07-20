import { Container, Typography } from "@mui/material";
import React from "react";
import ArContainer from "../../layout/ArContainer";
import HeaderGif from "../../assets/hero.gif";
const ArHeader = () => {
  return (
    <div className="flex flex-col gap-8">
      <ArContainer>
        <Typography
          variant="h2"
          sx={{ fontSize: "2.2rem", fontWeight: "700" }}
          gutterBottom
        >
          For<span className="text-[#ffc300]"> Manufacturers</span> ,<br />
          Service providers and Distributors.
        </Typography>
      </ArContainer>
      <div className="w-full ">
        <img src={HeaderGif} alt="header gif" width={"100%"} />
      </div>
      <ArContainer>
        <div className="flex justify-end text-xl text-[#262626]">
          <p>
            The permanent <span className="font-semibold"> online expo</span>
          </p>
        </div>
      </ArContainer>
    </div>
  );
};

export default ArHeader;
