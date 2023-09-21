import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

const Menu = lazy(() => import("./components/Menu/Menu"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Signup = lazy(() => import("./pages/auth/signup/Signup"));
const Login = lazy(() => import("./pages/auth/login/Login"));
const Profile = lazy(() => import("./pages/dashboard/profile/Profile"));
const Payment = lazy(() => import("./pages/dashboard/payment/Payment"));

import "./App.css";
const Content = lazy(() => import("./pages/dashboard/content/Content"));
const Complete = lazy(() =>
  import("./pages/dashboard/payment/complete/Complete")
);
//const Packages = lazy(() => import("./pages/dashboard/packages/Packages"));
//const Package = lazy(() => import("./pages/dashboard/packages/Package"));



function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<Menu />}>
              <Route path="/" element={<Content />} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/packages" element={<Packages />} />
              <Route path="/packages/:name" element={<Package />} /> */}
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment/*" element={<Complete />} />
            </Route>
          </Route>
          <Route path="/authentication/signup" element={<Signup />} />
          <Route path="/authentication/login" element={<Login />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
