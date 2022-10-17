import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          p:2,
          width: "100%",
          minHeight: 70,
          

        },
      }}
    >
      <Paper elevation={3}>
          Dashboard
      </Paper>
    </Box>
  );
}
