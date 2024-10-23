import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

// Header component styling
const Header = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  boxSizing: 'border-box',
  height: '100px',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

// Logo image styling
const Logo = styled("img")({
  width: '504px',
  height: '72px',
  objectFit: 'cover',
});

// Divider styling
const Divider = styled("img")({
  width: '100%',
  height: '1px',
  objectFit: 'cover',
  marginTop: 'auto',
});

// Form container styling
const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  borderColor: theme.palette.divider,
  borderStyle: 'solid',
  borderWidth: '1px',
}));

// SignIn Component
const SignIn = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '100px',
      }}
    >
      {/* Header Section */}
      <Header>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: "16px",
            transform: "translateY(-50%)",
          }}
        >
          <MenuIcon /> {/* Replaced with hamburger menu icon */}
        </IconButton>
        <Logo src={`${process.env.PUBLIC_URL}/assets/Logo.png`} alt="Logo" />
      </Header>

      {/* Main Content Section */}
      <Grid
        container
        spacing={6}
        sx={{
          flexGrow: 1,
          maxWidth: '1200px',
          width: '100%',
          padding: 4,
          marginTop: 4,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          minHeight: 'calc(100vh - 200px)',
        }}
      >
        <Grid item xs={12} md={5} sx={{ marginLeft: 2 }}>
          <Typography variant="h3" color="primary" gutterBottom align="left">
            Recipe Resource
          </Typography>
          <Typography variant="body1" gutterBottom align="left">
            Enter your ingredients, explore recipes, and create meal plans with
            ease.
            <br />
            <strong>Start planning your next meal today!</strong>
          </Typography>
        </Grid>

        <Grid item xs={12} md={5} sx={{ marginRight: 2 }}>
          <FormContainer elevation={0} sx={{ width: '100%' }}>
            {/* Email Label */}
            <Typography
              variant="body2"
              gutterBottom
              sx={{ marginBottom: '4px' }} // Reduce space between label and input
            >
              Email
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              margin="dense" // Reduce padding inside the TextField
              placeholder="Enter your email"
            />

            {/* Password Label */}
            <Typography
              variant="body2"
              gutterBottom
              sx={{ marginBottom: '4px', marginTop: '16px' }} // Adjust top margin to align properly
            >
              Password
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              margin="dense" // Use smaller margin for compact layout
              type="password"
              placeholder="Enter your password"
            />

            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
            >
              <Button variant="contained" color="primary">
                Sign in
              </Button>
              <Button variant="contained" color="success">
                Register
              </Button>
            </Box>
            <Link
              href="#"
              variant="body2"
              sx={{ mt: 2, display: 'block', textAlign: 'center' }}
            >
              Forgot password?
            </Link>
          </FormContainer>
        </Grid>
      </Grid>

      {/* Divider at the Bottom */}
      <Divider
        src={`${process.env.PUBLIC_URL}/assets/divider.png`}
        alt="Divider"
      />
    </Box>
  );
};

export default SignIn;
