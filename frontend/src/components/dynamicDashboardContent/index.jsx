import React from "react";
import { useState } from "react";
import DashboardNavBar from "../dashboardNavBar";
import DashboardMenuTitle from "../dashboardTitleMenu";

const DyanimContent = ({ tabs, titlesAndDescriptions }) => {
  const [actionTab, setActionTab] = useState(1);


  const handleTabChange = (tabId) => {
    setActionTab(tabId);
  };



  return (
    <div>
      <DashboardMenuTitle
        titlesAndDescriptions={titlesAndDescriptions}
        actionTab={actionTab}
      />
      <DashboardNavBar
        tabs={tabs}
        actionTab={actionTab}
        onTabChange={handleTabChange}
      />
      {tabs.find((tab) => tab.id === actionTab)?.component}
    </div>
  );
};

export default DyanimContent;
