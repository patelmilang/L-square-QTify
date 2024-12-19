import React from "react";
import { Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
        justifyContent: "center",
        display:"flex"
      }}
    >
        <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        100 Thousand Songs, ad-free
      </Typography>
      <Typography variant="h4">Over thousands podcast episodes</Typography>
      </Box>
      <Box>
        <Box
          component="img"
          src="./asset/vibrating-headphone.svg" // Replace with correct path
          alt="Headphones"
          sx={{  width: "120px", height: "120px" }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
