import React from "react";
import FormInputs from "../formInputs";
import { FaAddressCard } from "react-icons/fa6";
import FormButton from "../formButton/index";
import axios from "axios";
import { useState } from "react";

const PrintPatientInfo = () => {
  const [patientData, setPatientData] = useState({
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  //handle sumit to delete patient by id
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(patientData);
    axios
      .delete(
        `http://localhost:5000/api/v1/admin/patient/deletePatient/${patientData.id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Patient deleted Successfully");
        setPatientData({});
      })
      .catch((error) => {
        console.log(error);
        alert("Delete Failed");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="text"
          id="2"
          placeholder="Patient ID "
          iconUrl={<FaAddressCard />}
          name="id"
          onChange={handleChange}
        />
        <FormButton button="Delete Patient" />
      </form>
    </>
  );
};

export default PrintPatientInfo;
