import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu/Menu";

import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import Profile from "./pages/dashboard/profile/Profile";
import Payment from "./pages/dashboard/payment/Payment";


import "./App.css";
import Content from "./pages/dashboard/content/Content";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Menu />}>
            <Route path="/" element={<Content />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />

          </Route>
        </Route>
        <Route path="/authentication/signup" element={<Signup />} />
        <Route path="/authentication/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
