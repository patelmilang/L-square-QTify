import React from "react";
import {   Box, Button } from "@mui/material";

const Feedback =()=>{
    return (
        <Box>
            <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "green",
          fontFamily: "Poppins",
          fontSize: { xs: "0.75rem", sm: "1rem" }, // Responsive font size
          padding: { xs: "5px 10px", sm: "6px 16px" }, // Adjust button padding
        }}
      >
        Give Feedback
      </Button>
        </Box>
    );
}
export default Feedback;