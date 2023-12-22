import React from "react";
import "./style.css";
import DyanimContent from "../dynamicDashboardContent";
import {
  patientTitlesAndDesc,
  patientTabs,
} from "../pateintManagement/addPateint";
const PatientManagment = () => {
  return (
    <>
      <DyanimContent
        tabs={patientTabs}
        titlesAndDescriptions={patientTitlesAndDesc}
      />
    </>
  );
};
export default PatientManagment;
