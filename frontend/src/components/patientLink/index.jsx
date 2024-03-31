import React from "react";
import FormInputs from "../formInputs";
import { IoLink } from "react-icons/io5";
import FormButton from "../formButton/index";
import { useState } from "react";
import axios from "axios";

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
      const response = await axios.post(
        "http://localhost:5000/api/v1/admin/patient/sendPatientLinks/:patientId",
        link,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      alert("Link Sent Successfully");
      setLink({});
    } catch (error) {
      console.log(error);
      alert("Link Sending Failed");
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
