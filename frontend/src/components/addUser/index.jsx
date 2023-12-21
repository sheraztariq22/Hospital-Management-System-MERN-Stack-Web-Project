import React from "react";
import DyanimContent from "../dynamicDashboardContent";
import { titlesAndDescriptions, tabs } from "../addUser/addUser";

const AddUser = () => {
  return (
    <>
      <DyanimContent
        titlesAndDescriptions={titlesAndDescriptions}
        tabs={tabs}
      />
    </>
  );
};

export default AddUser;
