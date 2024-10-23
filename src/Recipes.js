import {
  FavoriteBorder,
  MoreVert,
  Search,
  Timer,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

// Restrictions Component
const Restrictions = () => {
  const restrictionOptions = [
    "No meat",
    "No nuts",
    "No eggs",
    "No gluten",
    "No shellfish",
    "No lactose",
  ];

  return (
    <Box
      sx={{
        width: "300px",
        marginTop: 2,
        padding: 2,
        bgcolor: "white",
        borderRadius: "8px",
        border: "1px solid #b0bec5",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Nunito-Bold, Helvetica",
          fontWeight: "bold",
          color: "#f5a623",
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        Restrictions
      </Typography>

      <Grid container spacing={2}>
        {restrictionOptions.map((option, index) => (
          <Grid item xs={6} key={index}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <input
                type="radio"
                name="restriction"
                id={`restriction-${index}`}
                style={{ transform: "scale(1.2)" }}
              />
              <label
                htmlFor={`restriction-${index}`}
                style={{
                  fontFamily: "Nunito-Medium, Helvetica",
                  color: "#313043",
                }}
              >
                {option}
              </label>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Header styling
const Header = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  height: "100px",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

// Logo styling
const Logo = styled("img")({
  width: "504px",
  height: "72px",
  objectFit: "cover",
});

// Divider styling
const StyledDivider = styled(Divider)({
  marginTop: "auto",
  width: "100%",
});

// Custom TextField styling for Search
const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    backgroundColor: "#e2e2e2",
    borderRadius: "4px",
    "&:hover": {
      borderColor: "#f5a623",
    },
    "&.Mui-focused": {
      borderColor: "#f5a623",
      borderWidth: "2px",
    },
  },
});

// Pantry Component with original size restored
const Pantry = () => {
  const [openItems, setOpenItems] = useState({});

  const handleToggle = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const pantryItems = [
    "Essentials",
    "Fruits & Veggies",
    "Meats",
    "Carbohydrates",
    "Seasonings",
  ];

  return (
    <Box
      sx={{
        width: "300px", // Restored width
        marginTop: -10,
        padding: 2,
        bgcolor: "white",
        border: 1,
        borderColor: "#303030",
        borderRadius: "4px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Nunito-Bold, Helvetica",
          fontWeight: "bold",
          color: "#f5a623",
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        Pantry
      </Typography>

      <List>
        {pantryItems.map((text, index) => (
          <Box key={index}>
            <ListItemButton
              onClick={() => handleToggle(index)}
              sx={{
                bgcolor: "#b6d7a8",
                borderRadius: "4px",
                marginBottom: 1,
              }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontFamily: "Nunito-Medium, Helvetica",
                  fontWeight: "medium",
                  color: "#313043",
                }}
              />
              <ListItemIcon>
                <ExpandMoreIcon
                  sx={{ color: openItems[index] ? "#f20597" : "#313043" }}
                />
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem sx={{ pl: 4 }}>
                  <ListItemText primary={`Sub-item for ${text}`} />
                </ListItem>
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </Box>
  );
};

// Recipes Component
const Recipes = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const contentWidth = { xs: "100%", sm: "600px", md: "900px" };
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingTop: "100px",
        }}
      >
        <Header>
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              right: "16px",
              transform: "translateY(-50%)",
            }}
          >
            <MoreVert />
          </IconButton>
          <Logo src={`${process.env.PUBLIC_URL}/assets/Logo.png`} alt="Logo" />
        </Header>
  
        <Box
          sx={{
            width: contentWidth,
            marginTop: 4,
            marginLeft: "90px",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <CustomTextField
            value={searchTerm}
            onChange={handleSearch}
            variant="standard"
            placeholder="Search"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#f5a623",
              color: "white",
              "&:hover": { bgcolor: "#e6951c" },
              height: "44px",
              borderRadius: "4px",
            }}
          >
            Filter
          </Button>
        </Box>
  
        <Box
          sx={{
            display: "flex",
            gap: 5,
            marginLeft: "90px",
            marginTop: 4,
            flexWrap: "wrap",
          }}
        >
          {/* Recipe Cards */}
          <Grid container spacing={3} sx={{ width: contentWidth }}>
            {Array(6)
              .fill()
              .map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      height: 320,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: 2,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="150"
                      image={`${process.env.PUBLIC_URL}/assets/Image.png`}
                      alt="Recipe Image"
                    />
                    <CardContent>
                      <Typography variant="h6" color="#1d1b20">
                        Recipe Title
                      </Typography>
                      <Typography variant="body2" color="#49454F">
                        Description
                      </Typography>
                      <Typography variant="caption" color="#49454F">
                        Missing X ingredients...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <FavoriteBorder />
                      <Timer fontSize="small" />
                      <Typography variant="caption" color="#f20597">
                        20 min
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
  
          {/* Pantry and Restrictions Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Align vertically
              gap: 2, // Space between Pantry and Restrictions
            }}
          >
            <Pantry />
            <Restrictions />
          </Box>
        </Box>
  
        <StyledDivider />
      </Box>
    );
  };
  
  export default Recipes;
