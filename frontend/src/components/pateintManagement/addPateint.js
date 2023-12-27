// tabs.js

import PatientLink from "../patientLink";
import PatientList from "../patientsList";
import UpdatePatient from "../updatePatient";
import PrintPatientInfo from "../printPatientInfo";
import AddPatient from "../addPatients";

export const patientTabs = [
  { id: 1, label: "Add Patient", component: <AddPatient /> },
  { id: 2, label: "Patient Links", component: <PatientLink /> },
  { id: 3, label: "List Of Patients", component: <PatientList /> },
  { id: 4, label: "Update Patient", component: <UpdatePatient /> },
  { id: 5, label: "Delete Patient", component: <PrintPatientInfo /> },
];

// titlesAndDescriptions.js
export const patientTitlesAndDesc = [
  {
    id: 1,
    title: "Add  New Patient   ",
    description: "Here you can add new patient details.",
  },
  {
    id: 2,
    title: "Send Patient Links   ",
    description:
      "Here you can send links of reports, appointments and medical form to Patients ",
  },
  {
    id: 3,
    title: "List of Patient   ",
    description: "Here you see list of Patients.",
  },
  {
    id: 4,
    title: "Update Patient info",
    description: "Here you can Update the data.",
  },
  {
    id: 5,
    title: "Print Patient Info",
    description: "Here you can add new patient details.",
  },
  // Add more title-description pairs as needed
];
