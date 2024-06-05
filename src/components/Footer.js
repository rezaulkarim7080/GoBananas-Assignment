import React from "react";
import { Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";


const Footer = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "black",
          color: "#1976d2",
          p: 3,
          mt: "[80%]",
        }}
      >
        {/* foooter icons */}
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "gold",
              transform: "translateY(5px)",
              transition: "all .3s",
            },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
        >
          Email : rkrezaulkarim88@gmail.com
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
