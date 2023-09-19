import { useState, useCallback } from "react";
import axios from "axios";

import PropTypes from "prop-types";

import {
  CssBaseline,
  InputLabel,
  Typography,
} from "../../constants/MuiConstants";

import { useNavigate } from "react-router-dom";

import Divider from "../Divider/Divider";
import Breadcrumbs from "../BreadCrumbs/BreadCrumbs";
import Input from "../Input/Input";

import { menus } from "./menus";

import Logo from "../../assets/images/logo-ct.png";
import { Add } from "@mui/icons-material";

import { Outlet } from "react-router-dom";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Drawer,
  AppBar,
  Toolbar,
  Avatar,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  MenuItem,
  Select,
} from "../../constants/MuiConstants";

const drawerWidth = 200;

const defaultFormData = {
  firstname: "",
  lastname: "",
  email: "",
  address: "",
  phone: "",
  payment: "",
  packages: [],
};

const packages = ["Immigrant", "Real Estate", "Lawyer"];

function Menu(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menusData, setMenusData] = useState(menus);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    if (typeof value === "string") {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [name]: value,
        };
      });
    } else {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          packages: typeof value === "string" ? value.split(",") : value,
        };
      });
    }
  };

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData);
    },
    [formData]
  );

  const navigate = useNavigate();

  const handleMenuClick = useCallback(
    (id, text) => {
      if (id) {
        setMenusData((prevMenuData) => {
          return prevMenuData.map((menu) => {
            return menu.id === id
              ? { ...menu, active: true }
              : { ...menu, active: false };
          });
        });
      }
      // handling navigation
      if (text === "Dashboard") {
        navigate("/");
      } else if (text === "Sign Up") {
        navigate("/authentication/signup");
      } else if (text === "Sign In") {
        navigate("/authentication/login");
      } else if (text === "Profile") {
        navigate("/profile");
      } else if (text === "Payment") {
        navigate("/payment");
      }
    },
    [menusData]
  );

  const addAClient = async () => {
    const clientData = {
      firstName: "John",
      lastName: "Doe",
      email: "fk@gmail.com",
      password: "secret123",
      phoneNum: "4523432434",
      package: "lawayer",
      paymentStatus: 1,
    };

    const baseUrl = `https://localhost:7088`;

    try {
      const { data } = await axios.post(`${baseUrl}/Client`, clientData, {
        withCredentials: true,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: "1em",
        }}
      >
        <Avatar
          variant="square"
          sx={{ filter: "brightness(.5)" }}
          src={Logo}
          alt="logo"
        ></Avatar>
        <Typography paragraph ml={"1em"} fontSize={"1.2rem"} fontWeight={"800"}>
          Demo App
        </Typography>
      </Box>
      <Divider />
      <List>
        {menusData.map((menu) => (
          <ListItem
            key={menu.id}
            disablePadding
            onClick={() => handleMenuClick(menu.id, menu.title)}
          >
            <ListItemButton>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const dialog = (
    <>
      (
      <div>
        <Dialog open={open} onClose={handleClose} maxWidth="sm">
          <Box
            sx={{
              background:
                "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
              color: "white",
            }}
          >
            <DialogTitle>Add A Client</DialogTitle>
            <Box component={"form"} onSubmit={handleFormSubmit}>
              <DialogContent>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                    }}
                  >
                    <Box width={"45%"}>
                      <Input
                        label={"Firstname"}
                        name={"firstname"}
                        type={"text"}
                        variant={"standard"}
                        value={formData.firstname}
                        onChangeHandler={handleChange}
                      />
                    </Box>

                    <Box width={"45%"}>
                      <Input
                        label={"Lastname"}
                        name={"lastname"}
                        type={"text"}
                        variant={"standard"}
                        value={formData.lastname}
                        onChangeHandler={handleChange}
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                    }}
                  >
                    <Box width={"45%"}>
                      <Input
                        label={"Email"}
                        name={"email"}
                        type={"email"}
                        variant={"standard"}
                        value={formData.email}
                        onChangeHandler={handleChange}
                      />
                    </Box>

                    <Box width={"45%"}>
                      <Input
                        label={"Phone"}
                        name={"phone"}
                        type={"tel"}
                        variant={"standard"}
                        value={formData.phone}
                        onChangeHandler={handleChange}
                      />
                    </Box>
                  </Box>

                  <Input
                    label={"Address"}
                    name={"address"}
                    type={"text"}
                    variant={"standard"}
                    value={formData.address}
                    onChangeHandler={handleChange}
                  />

                  <Box
                    width={"100%"}
                    my={"1em"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Select
                      required
                      sx={{ width: "45%", bgcolor: "whitesmoke" }}
                      value={formData.packages}
                      label="Packages"
                      variant="standard"
                      multiple
                      onChange={handleChange}
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {packages.map((packageName) => (
                        <MenuItem key={packageName} value={packageName}>
                          {packageName}
                        </MenuItem>
                      ))}
                    </Select>

                    <Select
                      required
                      sx={{ width: "45%", bgcolor: "whitesmoke" }}
                      value={formData.payment}
                      label="Payment"
                      variant="standard"
                      name="payment"
                      onChange={handleChange}
                    >
                      <MenuItem value={"paid"}>paid</MenuItem>
                      <MenuItem value={"unpaid"}>unpaid</MenuItem>
                    </Select>
                  </Box>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "whitesmoke",
                    color: "black",
                    ":hover": { bgcolor: "whitesmoke", color: "black" },
                  }}
                >
                  ADD
                </Button>
              </DialogActions>
            </Box>
          </Box>
        </Dialog>
      </div>
      );
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <>{dialog}</>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            bgcolor: "aliceblue",
            color: "grey",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background:
              "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
            color: "white",
            borderBottom: "1px solid grey",
          }}
        >
          <Box>
            <Breadcrumbs />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "20%",
            }}
          >
            <Button
              sx={{
                background: "aliceblue",
                color: "black",
                ":hover": { background: "aliceblue", color: "black" },
              }}
              variant="contained"
              startIcon={<Add />}
              onClick={handleClickOpen}
            >
              Add a Client
            </Button>

            <Avatar
              variant="circular"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="profile"
            ></Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
              color: "aliceblue",
              borderRight: "1px solid grey",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

Menu.propTypes = {
  window: PropTypes.func,
};

export default Menu;
