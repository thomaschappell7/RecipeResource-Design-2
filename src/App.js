// App.js
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // Optional: Reset CSS styles
import SignIn from "./SignIn";
import Recipes from './Recipes';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#f29057", // Your custom primary color
    },
    success: {
      main: "#4caf50", // Your custom success color
    },
    divider: "#e0e0e0", // Your divider color
    grey: {
      100: "#f5f5f5", // Light grey background color
    },
  },
  shape: {
    borderRadius: 8, // Consistent border radius
  },
  spacing: 8, // 8px spacing unit
});

function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const handleSignIn = () => {
        setIsSignedIn(true);
    };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets browser styles */}
          {isSignedIn ? (
              <Recipes />
          ) : (
              <SignIn onSignIn={handleSignIn} />
          )}
    </ThemeProvider>
  );
}

export default App;
