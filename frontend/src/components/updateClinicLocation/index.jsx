import React from "react";
import FormInputs from "../formInputs";
import { BiClinic } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { FaAddressCard } from "react-icons/fa6";
import FormButton from "../formButton/index";
import axios from "axios";
import { useState } from "react";

const UpdateClinicLocation = () => {
  const [updateClinc, setUpdateClinic] = useState({
    id: "",
    clinicName: "",
    clincPreviousAddress: "",
    clinicNewAddress: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateClinic((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(updateClinc);
    axios
      .put(
        `http://localhost:5000/api/v1/admin/clinic/updateClinicLocation/${updateClinc.id}`,
        updateClinc,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Clinic Updated Successfully");
        setUpdateClinic({});
      })
      .catch((error) => {
        console.log(error);
        alert("Updation Failed");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="text"
          id="1"
          name="clinicName"
          placeholder="Clinic Name"
          iconUrl={<BiClinic />}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          id="2"
          name="clincPreviousAddress"
          placeholder="Clinic Previous Address"
          iconUrl={<GrLocation />}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          id="3"
          name="clinicNewAddress"
          placeholder="Clinic New Address"
          iconUrl={<GrLocation />}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          id="4"
          name="id"
          placeholder="Clinic ID"
          iconUrl={<FaAddressCard />}
          onChange={handleChange}
        />
        <FormButton button="Update Location" />
      </form>
    </>
  );
};

export default UpdateClinicLocation;
