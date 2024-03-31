import React from "react";
import { FaAddressCard } from "react-icons/fa6";
import FormInputs from "../formInputs";
import FormButton from "../formButton/index";
import axios from "axios";
import { useState } from "react";

const DeleteClinicLoctaion = () => {
  const [deleteClinic, setDeleteClinic] = useState({
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeleteClinic((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(deleteClinic);
    axios
      .delete(
        `http://localhost:5000/api/v1/admin/clinic/deleteClinicLocation/${deleteClinic.id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Clinic deleted Successfully");
        setDeleteClinic({});
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
          id="3"
          name="id"
          placeholder="Clinic Id"
          onChange={handleChange}
          iconUrl={<FaAddressCard />}
        />
        <FormButton button="Delete Location" />
      </form>
    </>
  );
};

export default DeleteClinicLoctaion;
