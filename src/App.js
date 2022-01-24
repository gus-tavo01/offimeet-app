import React from "react";
import { Box } from "@mui/material";

import AppNavBar from "./components/AppNavBar";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Box>
      <AppNavBar />
      <Outlet />
    </Box>
  );
};

export default App;
