import { Box, Typography, styled } from "../../../constants/MuiConstants";

import BgSignInImage from "../../../assets/images/bg-sign-in-basic.jpeg";

export const LoginContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundImage: `linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)),url(${BgSignInImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "101vw",
  margin: "0 -2em",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    padding: "5em 0",
  },
}));

export const LoginPage = styled(Box)(({ theme }) => ({
  maxWidth: "500px",
  width: "100%",
  backgroundColor: "whitesmoke",
  height: "400px",
  boxShadow:
    "0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)",
  borderRadius: ".75rem",
  padding: ".5em",
}));

export const LoginPageTop = styled(Box)(({ theme }) => ({
  width: "90%",
  borderRadius: ".75rem",
  background: `linear-gradient(195deg, #49a3f1, #1A73E8)`,
  margin: "-3em auto",
  padding: "2em 1em",
  textAlign: "center",
}));

export const LoginPageFormContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "4em auto",
}));

export const DontHaveAccountContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "2em 0em",
}));
