import React from "react";
import DashboardContainer from "./components/dashboard-container";
import DashboardControls from "./components/dashboard-controls";
import DashboardMetrics from "./components/dashboard-metrics";

const Dashboard = () => (
  <DashboardContainer>
    <DashboardControls className="pure-u-lg-1-6" />
    <DashboardMetrics />
  </DashboardContainer>
);

export default Dashboard;
