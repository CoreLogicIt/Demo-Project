import Typography from "../Typography/Typography";

import { Breadcrumbs as BreadcrumbsComp } from "../../constants/MuiConstants";

import { Home } from "@mui/icons-material";

import { Box } from "../../constants/MuiConstants";

const viewTextStyle = {
  marginLeft: "1em",
  color: "white",
};

function handleClick(event) {
  event.preventDefault();
}

const Breadcrumbs = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <BreadcrumbsComp aria-label="breadcrumb" sx={{ width: "30%" }}>
        <Box display={"flex"}>
          <Home sx={{ fill: "aliceblue" }} />
          <Typography
            component={"p"}
            variant={"p"}
            text={"/Dashboard"}
            styles={viewTextStyle}
          />
          <Typography sx={{ color: "white" }}>Dashbaord</Typography>
        </Box>
      </BreadcrumbsComp>
    </div>
  );
};

export default Breadcrumbs;
