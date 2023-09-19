// import Menu from "../../components/Menu/Menu";

import { DashboardContainer } from "./DashboardStyles";

import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <DashboardContainer>
        <Outlet />
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
