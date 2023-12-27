import React from "react";
import FormInputs from "../formInputs";
import { IoLink } from "react-icons/io5";
import FormButton from "../formButton/index";
import { useState } from "react";

const PatientLink = () => {
  const [link, setLink] = useState({
    patientAppointmentUrl: "",
    patientMedicalFormUrl: "",
    patientReportUrl: "",
    patientId: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setLink((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", link);
    try {
      console.log(JSON.stringify(link));
      const response = await fetch(
        "http://localhost:3000/api/v1/admin/patient//sendPatientLinks/:patientId",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          credentials: "include",
          body: JSON.stringify(link),
        }
      );

      if (response.ok) {
        alert("Link send to Patient!");
        setLink({});
      } else {
        const errorData = await response.json();
        console.error("Failed to add patient:", errorData);
      }
    } catch (error) {
      console.error("Error sending link:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInputs
        type="text"
        name="patientAppointmentUrl"
        id="1"
        placeholder="Patient Appointment Url"
        iconUrl={<IoLink />}
        onChange={handleChange}
      />
      <FormInputs
        type="text"
        id="2"
        placeholder="Patient Medical form Url"
        iconUrl={<IoLink />}
        name={"patientMedicalFormUrl"}
        onChange={handleChange}
      />
      <FormInputs
        type="text"
        id="3"
        placeholder="Patient Reports Url"
        iconUrl={<IoLink />}
        name={"patientReportUrl"}
        onChange={handleChange}
      />
      <FormInputs
        type="text"
        id="4"
        placeholder="Patient ID"
        name="patientId"
        onChange={handleChange}
      />

      <FormButton button="Send Link" />
    </form>
  );
};

export default PatientLink;
