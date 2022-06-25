import React, { useState } from "react";
import NavBar from "./components/NavBar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Box from "@mui/material/Box";
import { createTheme, Stack } from "@mui/material";
import Add from "./components/Add";
import { ThemeProvider } from "@mui/material";
import DrawSide from "./components/DrawSide";

function App() {
  const [mode, setMode] = useState("light");
  const [draw, setDraw] = useState(false);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#FF5D5D",
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
        <DrawSide draw={draw} setDraw={setDraw} mode={mode} setMode={setMode} />
        <Box bgcolor={"background.default"} color={"text.primary"}>
          {/* navbar */}
          <NavBar draw={draw} setDraw={setDraw} />
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
