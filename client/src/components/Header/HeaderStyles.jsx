import { NavLink } from "react-router-dom";

import { styled, Box } from "../../constants/MuiConstants";

// import { themeStyles } from "../../utils/theme";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const ListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "40%",
}));

export const ListItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Link = styled(NavLink)(({ theme }) => ({
  color: "whitesmoke",
  textDecoration: "none",
  marginLeft: ".5em",
  letterSpacing: "1px",
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  width: "15%",
}));

export const LogoTypography = styled(Box)(({ theme }) => ({
  width: "20%",
  color: "whitesmoke",
  letterSpacing: "1px",
}));
