import React, { useState } from "react";
import DashboardSideBar from "../../components/dashboardSideBar";
import DashboardMainLayout from "../../components/dashboardLayout";
import PatientManagment from "../../components/pateintManagement";
import ClinicalManagment from "../../components/clinicalManagment";
import { sideBartabs } from "../../components/dashboardSideBar/dashboardSideBar";

const Dashboard = () => {
  const [toggleState, setToggleState] = useState(1);

  const contentComponents = [
    null, // Index 0 is reserved
    <DashboardMainLayout key={1} />,
    <PatientManagment key={2} />,
    <ClinicalManagment key={3} />,
    // Add more components as needed
  ];

  return (
    <div style={{ display: "flex" }}>
      <DashboardSideBar
        toggleState={toggleState}
        setToggleState={setToggleState}
        tabs={sideBartabs}
      />
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: " #000000",
          padding: "1rem 2rem",
          color: "white",
        }}
      >
        {contentComponents[toggleState]}
      </div>
    </div>
  );
};

export default Dashboard;
