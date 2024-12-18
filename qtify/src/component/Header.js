import React from "react";
import { TextField, Typography, Box, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HeadphonesIcon from "@mui/icons-material/Headphones";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "green",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        color: "white",
      }}
    >
      {/* Logo Section */}
      <Box
        display="flex"
        alignItems="center"
        borderRadius={2}
        padding={1}
        sx={{ maxWidth: { xs: "100%", sm: 200 } }} // Responsive width
      >
        <Box
          component="img"
          src="./asset/headphone-logo.svg"
          alt="Headphones Logo"
          sx={{
            width: { xs: 24, sm: 28 }, // Smaller width for mobile
            height: { xs: 20, sm: 24 },
            position: "relative",
            top: { xs: "0px", sm: "-10px" },
            right: { xs: "0px", sm: "-22px" },
          }}
        />
        <Typography
          variant="h6"
          component="span"
          sx={{
            color: "#ffffff",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            fontSize: { xs: "1rem", sm: "1.25rem" }, // Responsive font size
            whiteSpace: "nowrap",
          }}
        >
          Q tify
        </Typography>
      </Box>

      {/* Search Section */}
      <Box sx={{ display: "flex", alignItems: "center"  }}>
        <TextField
          placeholder="Search an album of your choice"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
            width: { xs: "100%", sm: "400px" }, // Full width on mobile, fixed on larger screens
          }}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>

      {/* Feedback Button */}
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
