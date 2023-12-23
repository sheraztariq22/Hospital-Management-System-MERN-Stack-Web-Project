import DyanimContent from "../dynamicDashboardContent";
import {
  clinicalManTabs,
  clinicalTitlesAndDesc,
} from "../clinicalManagment/clinicalMan";
import "./style.css";
const ClinicalManagment = () => {
  return (
    <>
      <DyanimContent
        titlesAndDescriptions={clinicalTitlesAndDesc}
        tabs={clinicalManTabs}
      />
    </>
  );
};
export default ClinicalManagment;
