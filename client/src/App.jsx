import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu/Menu";

import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import Profile from "./pages/dashboard/profile/Profile";
import Payment from "./pages/dashboard/payment/Payment";

import "./App.css";
import Content from "./pages/dashboard/content/Content";

import { Button } from "@mui/material";

import axios from "axios";

const addAClient = async () => {
  const clientData = {
    firstName: "John",
    lastName: "Doe",
    email: "fk@gmail.com",
    password: "secret123",
    phoneNum: "4523432434",
    package: "lawayer",
    paymentStatus: "unpaid",
  };

  const baseUrl = `http://localhost:7088`;

  try {
    const { data } = await axios.post(`${baseUrl}/Client`, clientData);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Menu />}>
            <Route path="/" element={<Content />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
          </Route>
        </Route>
        <Route path="/authentication/signup" element={<Signup />} />
        <Route path="/authentication/login" element={<Login />} />
      </Routes>

      <Button type="button" onClick={addAClient}></Button>
    </div>
  );
}

export default App;
