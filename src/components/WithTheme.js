import React from "react";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

import useAppTheme from "../hooks/useAppTheme";

const WithTheme = ({ children }) => {
  const appTheme = useAppTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default WithTheme;
