// tabs.js

import AddClinicLocation from "../addClinicLocation";
import UpdateClinicLocation from "../updateClinicLocation";
import DeleteClinicLoctaion from "../deleteClinicLocation";
import ClinicReport from "../printClinicReport";

export const clinicalManTabs = [
  { id: 1, label: "Add New Location ", component: <AddClinicLocation /> },
  { id: 2, label: "Update Location info", component: <UpdateClinicLocation /> },
  { id: 3, label: "Delete Location info", component: <DeleteClinicLoctaion /> },
  { id: 4, label: "Generate and print reports", component: <ClinicReport /> },
];

// titlesAndDescriptions.js
export const clinicalTitlesAndDesc = [
  {
    id: 1,
    title: "Add New Location",
    description: "Here you can add new location details.",
  },
  {
    id: 2,
    title: "Update Location",
    description: "Here you can Update new location ",
  },
  {
    id: 3,
    title: "Delete Location",
    description: "Here you can delete location ",
  },
  {
    id: 4,
    title: "Generate and Print report ",
    description: "Here you can generate and print report ",
  },
  // Add more title-description pairs as needed
];
