import { AccountCircle } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { VpnKey } from "@mui/icons-material";
import { DonutLarge } from "@mui/icons-material";

import {
  ButtonContainer,
  HeaderContainer,
  Link,
  ListContainer,
  ListItem,
  LogoTypography,
} from "./HeaderStyles";
import Button from "../Button/Button";

import { Box } from "../../constants/MuiConstants";

const Header = () => {
  return (
    <>
      <Box p={"2em"}>
        <HeaderContainer component="header" className="container">
          <LogoTypography>Material Dashboard</LogoTypography>

          <ListContainer component="ul">
            <ListItem component="li">
              <DonutLarge sx={{ color: "whitesmoke" }} />
              <Link to={"/"}>Dashboard</Link>
            </ListItem>

            <ListItem component="li">
              <Person sx={{ color: "whitesmoke" }} />
              <Link to={"/"}>Profile</Link>
            </ListItem>

            <ListItem component="li">
              <AccountCircle sx={{ color: "whitesmoke" }} />
              <Link to="/authentication/signup">Signup</Link>
            </ListItem>

            <ListItem component="li">
              <VpnKey sx={{ color: "whitesmoke" }} />
              <Link to="/authentication/login">Signin</Link>
            </ListItem>
          </ListContainer>

          <ButtonContainer>
            <Button variant="contained" text="FREE DOWNOLOAD" />
          </ButtonContainer>
        </HeaderContainer>
      </Box>
    </>
  );
};

export default Header;
