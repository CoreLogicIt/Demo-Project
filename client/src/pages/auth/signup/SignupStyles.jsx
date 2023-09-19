import { Box, Typography, styled } from "../../../constants/MuiConstants";

import SignupBgImage from "../../../assets/images/bg-sign-up-cover.jpeg";

export const SignUpContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "30vh",
  position: "relative",
  margin: "2em 0",
  ":before": {
    position: "absolute",
    content: '""',
    top: "0px",
    left: "0px",
    backgroundImage: `linear-gradient(195deg, rgba(66, 66, 74, 0.4), rgba(25, 25, 25, 0.4)),url(${SignupBgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "300px",
    zIndex: "-1000",
    borderRadius: ".75rem",
  },
}));

export const SignUpHeaderWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  ":before": {
    position: "absolute",
    content: '""',
    top: "12px",
    left: "0px",
    width: "100%",
    zIndex: "-1000",
    opacity: "1000",
  },
}));

export const SignupPageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "600px",
  // marginTop: "calc((100vh — 400px)/2)"
  position: "relative",
}));

export const SignUpPageInner = styled(Box)(({ theme }) => ({
  maxWidth: "500px",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "-7rem",
  backgroundColor: "white",
  boxShadow:
    "0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)",
  borderRadius: ".75rem",
  padding: ".5em",
  [theme.breakpoints.up("xs")]:{
    margin:"4em 0"
  }
}));

export const SignUpPageTopBox = styled(Box)(({ theme }) => ({
  width: "90%",
  borderRadius: ".75rem",
  background: `linear-gradient(195deg, #49a3f1, #1A73E8)`,
  margin: "-3em auto",
  padding: "2em 1em",
  textAlign: "center",
}));

export const SignUpFormContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "4em auto",
}));

export const SignUpCheckboxContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  display: "flex",
  alignItems: "center",
  margin: "2em 0em",
  marginLeft: "-.7em",
}));

export const AgreeText = styled(Typography)(({ theme }) => ({
  color: "gray",
  fontSize: "1.1rem",
  fontFamily: "Roboto Sans-Serif",
}));

export const TermsAndConditionText = styled(Typography)(({ theme }) => ({
  color: "#1A73E8",
  fontSize: "1.1rem",
  fontFamily: "Roboto Sans-Serif",
}));

export const AlreadyHaveContainer = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent:"center",
  margin:"2em 0em"
}));
