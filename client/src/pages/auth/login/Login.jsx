import Button from "../../../components/Button/Button";
import Header from "../../../components/Header/Header";
import Input from "../../../components/Input/Input";
import Typography from "../../../components/Typography/Typography";

import { Box } from "../../../constants/MuiConstants";

import {
  DontHaveAccountContainer,
  LoginContainer,
  LoginPage,
  LoginPageFormContainer,
  LoginPageTop,
} from "./LoginStyles";

const topTextStyles = {
  color: "whitesmoke",
  fontWeight: "800",
  fontFamily: "inherit",
};

const bottomTextStyles = {
  color: "whitesmoke",
  fontWeight: "200",
  fontFamily: "inherit",
  marginTop: ".5em",
  fontSize: "1rem",
};

const DontHaveAnAccountText = {
  color: "grayText",
  fontFamily: "Roboto Sans-Serif",
};

const SignUpTextStyle = {
  color: "#1A73E8",
  fontFamily: "Roboto Sans-Serif",
  marginLeft: ".5em",
};

const Login = () => {
  return (
    <LoginContainer>
      <Box position={"absolute"} top={"5px"} width={"100%"}>
        <Header />
      </Box>
      <LoginPage>
        <LoginPageTop>
          <Typography
            styles={topTextStyles}
            text={"Welcome"}
            variant={"p"}
            component={"h1"}
          />
          <Typography
            styles={bottomTextStyles}
            text={"Enter your email and password to login"}
            variant={"p"}
            component={"p"}
          />
        </LoginPageTop>

        <LoginPageFormContainer component={"form"}>
          <Box>
            <Input
              name={"Email"}
              type={"text"}
              variant="outlined"
              label={"Email"}
            />
          </Box>

          <Box>
            <Input
              name={"Password"}
              type={"password"}
              variant="outlined"
              label={"Password"}
            />
          </Box>

          <Box mt={"2em"}>
            <Button type={"submit"} text={"SIGN IN"} variant={"contained"} />
          </Box>

          <DontHaveAccountContainer>
            <Typography
              text={"Dont have an Account?"}
              component={"p"}
              styles={DontHaveAnAccountText}
              variant={"p"}
            />
            <Typography
              view="signup"
              text={"Sign Up"}
              component={"span"}
              styles={SignUpTextStyle}
              variant={"p"}
            />
          </DontHaveAccountContainer>
        </LoginPageFormContainer>
      </LoginPage>
    </LoginContainer>
  );
};

export default Login;
