import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PaymentIcon from "@mui/icons-material/PaymentOutlined";
import Inventory2Icon from '@mui/icons-material/Inventory2';


export const menus = [
  {
    id: 1,
    title: "Dashboard",
    icon: <DashboardIcon sx={{fill:"white"}} />,
    active: true,
  },
  {
    id: 2,
    title: "Profile",
    icon: <PersonIcon sx={{fill:"white"}} />,
    active: false,
  },
  {
    id: 3,
    title: "Sign In",
    icon: <LoginIcon sx={{fill:"white"}} />,
    active: false,
  },
  {
    id: 4,
    title: "Sign Up",
    icon: <AssignmentIcon sx={{fill:"white"}} />,
    active: false,
  },
  {
    id: 5,
    title: "Payment",
    icon: <PaymentIcon sx={{fill:"white"}} />,
    active: false,
  },
  {
    id: 6,
    title: "Packages",
    icon: <Inventory2Icon sx={{fill:"white"}} />,
    active: false,
  },
];
