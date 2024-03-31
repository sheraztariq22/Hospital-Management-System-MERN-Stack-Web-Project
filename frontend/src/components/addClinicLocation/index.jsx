import React from "react";
import FormInputs from "../formInputs/index";
import { BiClinic } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import FormButton from "../formButton/index";
import axios from "axios";
import { useState } from "react";

const AddClinicLocation = () => {
  const [clinic, setClinic] = useState({
    clinicName: "",
    clinicNewAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClinic((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/admin/clinic/addClinic", clinic, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        alert("Clinic Added Successfully");
        setClinic({});
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="text"
          id="1"
          name="clinicName"
          placeholder="Clinic  Name"
          iconUrl={<BiClinic />}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          id="2"
          name="clinicNewAddress"
          placeholder="Clinic Address"
          iconUrl={<GrLocation />}
          onChange={handleChange}
        />
        <FormButton button="Add Clinic" />
      </form>
    </>
  );
};

export default AddClinicLocation;
