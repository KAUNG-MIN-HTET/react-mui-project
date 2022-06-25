import React, { useState } from "react";
import NavBar from "./components/NavBar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Box from "@mui/material/Box";
import { createTheme, Stack } from "@mui/material";
import Add from "./components/Add";
import { ThemeProvider } from "@mui/material";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#A084CF",
        light: "skyblue",
      },
      secondary: {
        main: "#000000",
      },
      other: {
        main: "green",
      },
      mode: mode,
    },
  });
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          {/* navbar */}
          <NavBar />
          <Stack
            direction="row"
            spacing={{ xs: 0, sm: 2 }}
            justifyContent="space-between"
          >
            <LeftBar setMode={setMode} mode={mode} />
            <Feed />
            <RightBar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
