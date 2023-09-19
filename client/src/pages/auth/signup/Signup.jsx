import Header from "../../../components/Header/Header";
import Input from "../../../components/Input/Input";
import CheckBox from "../../../components/CheckBox/CheckBox";
import Typography from "../../../components/Typography/Typography";
import Button from "../../../components/Button/Button";

import { Box } from "../../../constants/MuiConstants";

import {
  AgreeText,
  AlreadyHaveContainer,
  SignUpCheckboxContainer,
  SignUpContainer,
  SignUpFormContainer,
  SignUpHeaderWrapper,
  SignUpPageInner,
  SignUpPageTopBox,
  SignupPageContainer,
  TermsAndConditionText,
} from "./SignupStyles";

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

const AlreadyHaveAnAccountText = {
  color: "grayText",
  fontFamily: "Roboto Sans-Serif",
};

const SignInTextStyle = {
  color: "#1A73E8",
  fontFamily: "Roboto Sans-Serif",
  marginLeft: ".5em",
};

const Signup = () => {

  return (
    <Box className="center-x">
        <SignUpContainer>
          <SignUpHeaderWrapper>
            <Header />
          </SignUpHeaderWrapper>
        </SignUpContainer>

        <SignupPageContainer>
          <SignUpPageInner>
            <SignUpPageTopBox>
              <Typography
                styles={topTextStyles}
                text={"Join us today"}
                variant={"p"}
                component={"h1"}
              />
              <Typography
                styles={bottomTextStyles}
                text={"Enter your email and password to register"}
                variant={"p"}
                component={"p"}
              />
            </SignUpPageTopBox>

            <SignUpFormContainer component={"form"}>
              <Box>
                <Input
                  name={"Name"}
                  type={"text"}
                  variant="standard"
                  label={"Name"}
                />
              </Box>

              <Box>
                <Input
                  name={"Email"}
                  type={"text"}
                  variant="standard"
                  label={"Email"}
                />
              </Box>

              <Box>
                <Input
                  name={"Password"}
                  type={"password"}
                  variant="standard"
                  label={"Password"}
                />
              </Box>

              <SignUpCheckboxContainer>
                <CheckBox />
                <AgreeText variant="p" component={"p"}>
                  I agree the{" "}
                  <TermsAndConditionText variant="p" component={"span"}>
                    Terms and Conditions
                  </TermsAndConditionText>
                </AgreeText>
              </SignUpCheckboxContainer>

              <Box>
                <Button
                  type={"submit"}
                  text={"SiGN UP"}
                  variant={"contained"}
                />
              </Box>

              <AlreadyHaveContainer>
                <Typography
                  text={"Already have an Account?"}
                  component={"p"}
                  styles={AlreadyHaveAnAccountText}
                  variant={"p"}
                />
                <Typography
                  view="login"
                  text={"Sign In"}
                  component={"span"}
                  styles={SignInTextStyle}
                  variant={"p"}
                />
              </AlreadyHaveContainer>
            </SignUpFormContainer>
          </SignUpPageInner>
        </SignupPageContainer>
    </Box>
  );
};

export default Signup;
