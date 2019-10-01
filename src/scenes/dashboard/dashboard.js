import React from "react";
import DashboardContainer from "./components/dashboard-container";
import DashboardControls from "./components/dashboard-controls";
import DashboardMetrics from "./components/dashboard-metrics";

const Dashboard = () => (
  <DashboardContainer>
    <DashboardControls className="pure-u-md-3-5 pure-u-lg-2-5 pure-u-xl-1-5" />
    <DashboardMetrics />
  </DashboardContainer>
);

export default Dashboard;
